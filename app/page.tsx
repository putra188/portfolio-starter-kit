import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
   <main>
       <h1>Halo — saya  Femi Ridho </h1>
        <p>Ini website sederhana yang saya edit sendiri.</p>
    <img src="https://data.ecasals.net/img/04/g/9788411581967_04_g.jpg" alt="Hero" />
  </main>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`I'm a Femi Ridho and Satriyo, finding unmatched efficiency in
        Vim's keystroke commands and tabs' flexibility for personal viewing
        preferences. This extends to my support for static typing, where its
        early error detection ensures cleaner code, and my preference for dark
        mode, which eases long coding sessions by reducing eye strain.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
