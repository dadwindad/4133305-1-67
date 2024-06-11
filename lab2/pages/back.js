export default function back() {
    // const res = await getApi()
    // console.log(res);
    return (
        <button onClick={getApi}>Call API</button>
    )
}

async function getApi() {
  const res = await fetch("http://127.0.0.1:3000/api/hello");
  const data = res.json();
  console.log(data);
}
