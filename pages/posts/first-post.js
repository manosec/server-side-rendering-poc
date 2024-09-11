import Link from "next/link";

export default function FirstPost(){
    return (
        <div>
        <h1>First Post</h1>
            <Link href="/"> <h2>Back Home</h2> </Link>
        </div>
    )
}