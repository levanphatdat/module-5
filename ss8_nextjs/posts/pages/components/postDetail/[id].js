import {useRouter} from "next/router";
import "bootstrap/dist/css/bootstrap.css";
import {getPostById} from "../../data/data";
import Link from "next/link";

const Post = () => {
    const router = useRouter();
    const {id} = router.query;
    const result = getPostById(id);
    return (
        <div>
            <h1 className={"d-flex justify-content-center my-3"}>Post Detail</h1>
            <div className={'container-fluid'}>
                <p>ID: {result.id}</p>
                <p>TITLE: {result.title}</p>
                <p>SLUG: {result.slug}</p>
                <p>CATEGORY: {result.category}</p>
                <p>TIME: {result.updatedAt}</p>
            </div>
            <Link href={`/`} className={'btn btn-primary'}>
                Back to Post
            </Link>
        </div>
    )
}
export default Post;