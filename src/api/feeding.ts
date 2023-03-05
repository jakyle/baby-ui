import type { FeedingPayload } from "../lib/stores/feeding-store";

export const putFeeding = async (data: FeedingPayload): Promise<boolean> => {
	const response = await fetch('https://cn7melfie5tpmhszjicejraxsq0rwjis.lambda-url.us-east-1.on.aws/', {
		method: "POST",
		// mode: "cors",  no-cors, *cors, same-origin
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(data), // body data type must match "Content-Type" header
	});

	return response.status === 201
}