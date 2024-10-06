import ReactMarkdown from 'react-markdown';
import CommentWrapper from '../../components/comment/commentwrapper';
import fetchPost from '../../api/fetchPost';

export default async function Page ({ params }: {params: { post: number }}) {
  const postContent = await fetchPost(params.post);

  return (
    <>
        <div className="md:w-2/5">
          <div className="text-xl text-[#2da69a] font-bold md:text-6xl mx-3 mf:mb-4">{postContent.title}</div>
          <ReactMarkdown className="text-[#fdf6e3] mx-3 markdown">
            {postContent.content}
          </ReactMarkdown>
          <CommentWrapper post_id={Number(params.post)} />
        </div>
    </>
  );
}



