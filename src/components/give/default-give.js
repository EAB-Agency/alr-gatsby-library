import React from 'react';
import AcquiaForm from '../utils/AcquiaForm';

const DefaultGive = () => (
	<section className="lp-intro-form">
		<div className="center lp-intro-form-wrapper">
			<div className="lp-intro-form-content">
				<div className="lp-intro">
					<h2 className="lp-intro-title">
						Download <strong>global-token=content-give-title!</strong>
					</h2>
					<div className="intro-copy">
						<p>
							Copy that introduces the content give and highlights what it's all about. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vestibulum lacus et elit commodo, non gravida
							orci fringilla. Nulla nec quam sed velit commodo pulvinar sed sed quam.
						</p>
					</div>
				</div>

				<div className="lp-form">
					<div className="lp-form-initial form-initial" id="form-initial">
						<div className="lp-form-intro">
							<p>Fill out the information below, and once you hit the "Access My Guide" button, you'll be able to download your guide.</p>
						</div>

						<div className="lp-form-fields" id="form-form">
							<AcquiaForm src="//alr-wd-layout-library-sandbox-sj-1-2.contact-server.com/form/generate.js?id=5" multiple />
						</div>

						<div className="lp-form-footer" />
					</div>

					<div className="lp-form-thanks form-thanks" id="form-thanks" style={{ display: 'none' }}>
						<h3 className="lp-form-thanks-title">Thanks for providing us with your information!</h3>
						<p>
							Click the link below to download <strong>global-token=content-give-title.</strong>
						</p>
						<p className="button">
							<a href="{global-token=content-give-url}" className="lp-give-download" target="_blank">
								Download
							</a>
						</p>
						<hr />
						<p>
							Ready to apply to global-token=school-name-alt now? That's great! Simply{' '}
							<a href="global-token=application-url" id="link_apply_cg_thanks">
								submit your application
							</a>{' '}
							and we'll consider you for admission soon.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default DefaultGive;
