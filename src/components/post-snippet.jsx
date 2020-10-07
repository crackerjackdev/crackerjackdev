import React from "react"
import { Link } from "gatsby"

export default function PostSnippet() {
  return (
    <article className="mb-3 pb-3 border-b last:border-b-0">
      <header className="font-ibm-serif text-xl mb-2">
        <h2>
          Vestibulum commodo felis quis tortor vestibulum commodo felis quis
          tortor.
        </h2>
        <div className="text-xs">Nov 12</div>
      </header>
      <main className="text-base mb-2">
        Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae
        luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing,
        commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit
        tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices
        sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl.
        Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.
      </main>
      <footer>
        <Link to={`/`} className="text-sm">
          Continue reading...
        </Link>
      </footer>
    </article>
  )
}
