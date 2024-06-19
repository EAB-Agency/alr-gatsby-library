import React from 'react';
import SnippetToggler from '../utils/SnippetToggler';
import DefaultTiles from './default-tiles';
import './school-tiles-v6.scss';

const styleSheet = require('!!raw-loader!./school-tiles-v6.scss');
const html = require('!!raw-loader!./school-tiles-v6.html');

const codeFiles = [
  {
    fileName: 'school-tiles-v6.scss',
    code: styleSheet.default,
    language: 'scss',
    lineNumbersToDelete: '1-6',
  },
  {
    fileName: 'school-tiles-v6.html',
    code: html.default,
    language: 'html',
  },
];

const SchoolTilesSix = () => (
  <div className="🚀-school-tiles-v6 layout-section">
    <section className="lp-school">
      <div className="center lp-school-wrapper">
        <div className="lp-school-content">
          <ul className="lp-school-link-list">
            <li className="lp-school-link-item">
              <h3 className="headline">Applying to Graduate Programs at BU</h3>
              <p>
                When applying to a graduate or professional program at Bear
                University, keep in mind that each graduate school, center, or
                institute—and their individual departments and programs in many
                cases—determines its own application requirements.
              </p>
              <p>
                Take a moment to visit Graduate Admissions for a general
                introduction to applying to BU and be sure to reach out to the
                admissions counselors at your school and program of interest if
                you have questions.
              </p>
              <div className="button-wrap">
                <a
                  href="https://[[ EDU URL ]]"
                  id="link_linkdescription"
                  target="_blank"
                  rel="noreferrer"
                  className="button"
                >
                  Graduate Admission Requirements
                </a>
              </div>
            </li>
            <li className="lp-school-link-item">
              <h3 className="headline">Why a Degree from BU is Worth It</h3>
              <p>
                The real-world experience students gain at BU under the
                mentorship of expert faculty prepares them to excel wherever
                life takes them. Whether you're looking for a change in careers
                or taking the next step in your current one, you'll gain the
                skills to reach your professional goals – and then some.
              </p>
              <p>
                Plus, with an alumni network that is 50K strong, you'd be
                surprised where the connections you make at BU can take you.
              </p>
              <div className="button-wrap">
                <a
                  href="https://[[ EDU URL ]]"
                  id="link_linkdescription"
                  target="_blank"
                  rel="noreferrer"
                  className="button"
                >
                  Funding Your Education
                </a>
              </div>
            </li>
            <li className="lp-school-link-item">
              <h3 className="headline">Is Online Right for You?</h3>
              <p>
                BU offers a wide range of flexible online programs with new
                start dates available every month. You can take courses at your
                own pace, with programs like the MBA taking as few as 18 months
                – as long as 3+ years if you're balancing work or family and
                school. Whatever your pace, you can learn wherever is
                comfortable to you and you'll still have access to BU's wide
                range of academic and career services.
              </p>
              <div className="button-wrap">
                <a
                  href="https://[[ EDU URL ]]"
                  id="link_linkdescription"
                  target="_blank"
                  rel="noreferrer"
                  className="button"
                >
                  Learn About Online Programs
                </a>
              </div>
            </li>
            <li className="lp-school-link-item">
              <h3 className="headline">Or is On-Campus the Right Fit?</h3>
              <p>
                BU's Vermont campus is a beautiful place to learn. Classrooms
                are equipped with the type of equipment modern professionals
                use, and there's easy access to libraries and study spaces when
                the semester really picks up. There are also state-of-the-art
                facilities such as our nursing simulator and business innovation
                hub that let you practice your skills in a low-stakes
                environment.
              </p>
              <div className="button-wrap">
                <a
                  href="https://[[ EDU URL ]]"
                  id="link_linkdescription"
                  target="_blank"
                  rel="noreferrer"
                  className="button"
                >
                  Learn About On-Campus Programs
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <SnippetToggler files={codeFiles} />
  </div>
);

export default SchoolTilesSix;
