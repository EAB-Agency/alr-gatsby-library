import React from 'react';
import AcquiaForm from '../utils/AcquiaForm';

const DefaultApply = () => (
	<section className="lp-apply">
		<div className="center lp-apply-wrapper">
			<div className="content-container lp-apply-content">
				<div className="lp-apply-copy">
					<h2 className="lp-apply-title">
						Experience Support, Service, and Success
					</h2>
					<p>
						Expand your professional potential with one of our highly-regarded
						master's or doctoral degrees. We promise a personalized, inclusive,
						and immersive learning experience that prepares you for greater
						success. Submit your application today with these benefits:
					</p>
					<ul>
						<li>GRE waivers available</li>
						<li>Application fee waivers available</li>
						<li>
							Scholarships, assistantships, and stipends available for most
							programs
						</li>
					</ul>
				</div>

				<div className="apply-form lp-apply-form">
					<AcquiaForm
						src="https://alr-wd-layout-library-sandbox-sj-1-2.contact-server.com/form/generate.js?id=2"
						multiple
					/>
				</div>

				<div className="lp-apply-footer">
					<p>Extra info about requirements, deadlines, etc.</p>
				</div>
			</div>
		</div>

		<AcquiaForm src="https://admiss.info/acquia-template/alr-plugins.js" />
		<AcquiaForm src="https://admiss.info/acquia-template/alr-global.js" />
		<AcquiaForm src="https://admiss.info/acquia-template/alr-landing-page.js" />
	</section>
);

export default DefaultApply;
