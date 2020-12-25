import React from "react"
import Layout from "../components/Layout/layout"
import SEO from "../components/Utils/seo"

export default function About(props) {
	return (
		<Layout>
			{/* siteTitle specifies that the title will the siteTitle alone */}
			<SEO title="siteTitle" />
			<section className="About">
				<h1>About</h1>
				<p>
          I was a physicist and I am a machine learning practitioner.
					<br />
          <br />
          I write articles about what I learned in the areas of quantum physics, machine learning and quantitative finance. I like to combine ideas and knowledge from different fields in order to gain a deeper insights into the things I learn.
					<br />
					<br />
					This is also the place for me to share my codes and projects. Feel free to navigate around.
          <br />
          <br />
				</p>
			</section>
		</Layout>
	)
}
