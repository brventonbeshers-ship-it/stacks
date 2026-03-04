import { openContractCall } from "@stacks/connect";
import {
  callReadOnlyFunction,
  uintCV,
  cvToJSON,
  principalCV,
  ClarityValue,
} from "@stacks/transactions";
import { NETWORK, CONTRACT_ADDRESS, CONTRACT_NAME } from "./stacks";

export interface PollResults {
  pollId: number;
  optionA: number;
  optionB: number;
}

export interface VoterStats {
  totalVotes: number;
}

export async function vote(pollId: number, option: number): Promise<void> {
  await openContractCall({
    network: NETWORK,
    contractAddress: CONTRACT_ADDRESS,
    contractName: CONTRACT_NAME,
    functionName: "vote",
    functionArgs: [uintCV(pollId), uintCV(option)],
    onFinish: (data) => {
      console.log("Vote tx:", data.txId);
    },
    onCancel: () => {
      console.log("Vote cancelled");
    },
  });
}

export async function getPollResults(
  pollId: number
): Promise<PollResults | null> {
  try {
    const result = await callReadOnlyFunction({
      network: NETWORK,
      contractAddress: CONTRACT_ADDRESS,
      contractName: CONTRACT_NAME,
      functionName: "get-poll-results",
      functionArgs: [uintCV(pollId)],
      senderAddress: CONTRACT_ADDRESS,
    });

    const json = cvToJSON(result);
    if (json.success && json.value) {
      const val = json.value.value;
      return {
        pollId,
        optionA: parseInt(val["option-a"].value),
        optionB: parseInt(val["option-b"].value),
      };
    }
    return { pollId, optionA: 0, optionB: 0 };
  } catch {
    return { pollId, optionA: 0, optionB: 0 };
  }
}

export async function getVoterStats(
  address: string
): Promise<VoterStats | null> {
  try {
    const result = await callReadOnlyFunction({
      network: NETWORK,
      contractAddress: CONTRACT_ADDRESS,
      contractName: CONTRACT_NAME,
      functionName: "get-voter-stats",
      functionArgs: [principalCV(address)],
      senderAddress: CONTRACT_ADDRESS,
    });

    const json = cvToJSON(result);
    if (json.success && json.value) {
      return {
        totalVotes: parseInt(json.value.value["total-votes"].value),
      };
    }
    return { totalVotes: 0 };
  } catch {
    return { totalVotes: 0 };
  }
}

export async function getAllPollResults(): Promise<PollResults[]> {
  const promises = Array.from({ length: 20 }, (_, i) =>
    getPollResults(i + 1)
  );
  const results = await Promise.all(promises);
  return results.filter((r): r is PollResults => r !== null);
}

export async function getTopVoters(): Promise<
  { address: string; votes: number }[]
> {
  try {
    const url = `https://api.mainnet.hiro.so/extended/v1/address/${CONTRACT_ADDRESS}.${CONTRACT_NAME}/transactions?limit=50`;
    const res = await fetch(url);
    const data = await res.json();

    const voterMap = new Map<string, number>();
    for (const tx of data.results || []) {
      if (tx.tx_type === "contract_call" && tx.tx_status === "success") {
        const sender = tx.sender_address;
        voterMap.set(sender, (voterMap.get(sender) || 0) + 1);
      }
    }

    return Array.from(voterMap.entries())
      .map(([address, votes]) => ({ address, votes }))
      .sort((a, b) => b.votes - a.votes)
      .slice(0, 10);
  } catch {
    return [];
  }
}
