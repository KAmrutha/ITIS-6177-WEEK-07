export default async (request, ctx) => {

    const queryParams = new URLSearchParams(request.url.split('?')[1]);
    const personName = queryParams.get('name');

    return new Response(JSON.stringify({ message: `${personName} says hello!` }));
}