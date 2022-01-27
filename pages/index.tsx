import React from 'react';
import Layout from '../components/Layout';
import FadeIn from 'react-fade-in';

export const Index = (): JSX.Element => {
	return (
		<Layout>
		<FadeIn delay={0} transitionDuration={700}>
			<h1>
				We are <b className="gradient">Minds On</b>, a youth nonprofit
				with{' '}
				<a href="/vision">
					<u><span className="yuh">a vision</span></u>
				</a>
				.
			</h1>
			<h3>
				Stress is omnipresent—and yet finding solutions
				is more difficult than ever. We are a group of teens that aim to redefine the help you get for mental health through 
					<a href="/community">{' '}
					<u><span className="">community engagement</span></u>
				</a>{' '}
				 and 

				 	<a href="/hub">{' '}
					<u><span className="">centralization</span></u>
				</a>.{' '}
				
			</h3><br />
			<h3>
				It is our duty as global citizens to give back to society; we need to redesign the way we think about our future. Minds On is building a world of elegance through mental health by constructing unique pathways for all.
			</h3><br />
			<h3>
				
			 Check out recent research, articles, resources and campaigns. <br /><br />

				We hope you can join us in this change, <br />
				<i>The Minds On Team</i>
			</h3>
			</FadeIn>
		</Layout>

	);
};



export default Index;