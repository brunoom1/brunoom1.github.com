export async function POST(request: Request) {
  // Parse the request body
  const formData = await request.formData();

  // e.g. Insert new user into your DB
  const newUser = { id: Date.now(),
    name: formData.get('name'),
    email: formData.get('email'),
    cellphone: formData.get('cellphone'),
    message: formData.get('message')
   };
 
  return new Response(JSON.stringify(newUser), {
    status: 201,
    headers: { 'Content-Type': 'application/json' }
  });
}

export async function GET(request: Request) {
  // For example, fetch data from your DB here
  return new Response(JSON.stringify({message: "method not implemented"}), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}