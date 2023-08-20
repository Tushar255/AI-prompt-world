import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET = async (req, { params }) => {
    try {
        await connectToDB();

        const id = params.id;
        const userPrompts = await Prompt.find({ creator: id }).populate('creator');

        return new Response(JSON.stringify(userPrompts), { status: 200 });
    } catch (error) {
        return new Response("Failed to user's prompts", { status: 500 });
    }
}