import { motion } from 'framer-motion';
import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <div className="my-8">
        <BlogPosts />
      </div>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        소개
      </h1>
      <h3 className="mb-4 font-semibold tracking-tighter">
      Research Interests
      </h3>
      <p className="mb-4">
        {`AI hardware design and Digital PIM`}
      </p>
      <h3 className="mb-8 font-semibold tracking-tighter">
      Tape-out Schedule
      </h3>
      <p className="mb-4">
        {``}
      </p>
      <h3 className="mb-4 font-semibold tracking-tighter">
      Details
      </h3>
      <p className="mb-4">
        {`Currently pursuing a Bachelor's degree in the school of electrical engineering at Hanyang University, Ansan, South Korea. His research interests include artificial intelligence hardware design and Digital processing in memory (Digital PIM).`}
      </p>
      <h3 className="mb-4 font-semibold tracking-tighter">
      Email
      </h3>
      <p className="mb-4">
        {`hoon765@hanyang.ac.kr`}
      </p>
    </section>
  )
}
