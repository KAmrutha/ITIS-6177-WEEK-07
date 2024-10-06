export default async (req, context) => {

    const searchParams = new URLSearchParams(req.url.split('?')[1]);
    const name = searchParams.get('name');

    return new Response(JSON.stringify({message: `${name} says hello!`}));
}