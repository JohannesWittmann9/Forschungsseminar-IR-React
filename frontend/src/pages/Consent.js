import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Consent = () => {
  const [userId, setUserId] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Submitted User ID: ${userId}`);
    navigate("/prestudy");
  };

  return (
    <>
      <div className="container">
        <img
          className="ur-logo"
          src="/images/ur-logo-wort-bildmarke-grau.png"
          alt="UR Logo"
        />
        <h2>Informed Consent of Participation</h2>
        <section className="consent-intro">
          <p>
            You are invited to participate in the online study "Investigating
            Influences of Task Complexity on User’s Search Behavior with
            Generative AI Systems". The study is conducted by Johannes Wittmann,
            Nguyet Ha Phung, and Roman Görl and supervised by David Elsweiler
            from the University of Regensburg. The study with estimated 30
            participants takes place in the period from 2024-03-01 to
            2024-03-31. Please note:
          </p>
          <ul className="note">
            <li>
              Your participation is entirely voluntary and can be discontinued
              or withdrawn at any time
            </li>
            <li>One session of the online study will last ca. 1 hours</li>
            <li>
              Your benefit in participating is 1VP and your support our work and
              help to advance research in this area
            </li>
            <li>
              For the evaluation, we collect some of personal information (e.g.,
              age, gender, etc.), whereas contact data (e.g. e-mails) will only
              be used for feedback or further information about the study and
              not be passed on to any third parties
            </li>
            <li>
              During the session, we will log your input and manually record
              notes
            </li>
            <li>
              Recordings and personal data are subject to the guidelines of the
              General Data Protection Regulation (GDPR) and will
              pseudoanonymized (with a coded number) stored, evaluated, and
              potentially published so that without information from the
              researchers no conclusions can be drawn about individual persons
            </li>
          </ul>
          <p>
            If you have any questions or complaints about the whole informed
            consent process of this research study or your rights as a human
            reserach subject, please contact Dr. David Elsweiler (E-Mail:
            david.elsweiler@ur.de). You should carefully read the information
            below. Please take as much time as you need to read the consentform.
          </p>
        </section>
        <section className="consent-section">
          <h2>1. Purpose and Goal of this Research</h2>
          <p>
            In this study we aim to provide insights on search behaviour of
            users interacting with Generative AI systems. Therefore, we are
            curious to investigate how task complexity impacts interactions and
            search results when users are faced with complex search tasks. Your
            participation will help us achieve this research goal. The results
            of this research may be presented at scientific or professional
            meetings or published in scientific proceedings and journals.
          </p>
        </section>
        <section className="consent-section">
          <h2>2. Study Participation </h2>
          <p>
            Your participation in this online study is entirely voluntary and
            can be discontinued or withdrawn at any time. You can refuse to
            answer any questions or continue with the study at any time if you
            feel uncomfortable in any way. You can discontinue or withdraw your
            participation at any time without giving a reason. However, we
            reserve the right to exclude you from the study (e.g., with invalid
            trials or if continuing the study could have a negative impact on
            your well-being or the equipment). Repeated participation in the
            study is not permitted.
          </p>
        </section>
        <section className="consent-section">
          <h2>3. Study Procedure</h2>
          <p>
            <strong>After confirming your informed consent you will:</strong>
          </p>
          <ol className="procedure-list">
            <li>Read and accept the declaration of consent</li>
            <li>Complete the pre study questionnaires </li>
            <li>Study the work task and imagine this is a real job</li>
            <li>Complete the pre task questionnaires </li>
            <li>
              Do the search:
              <ul>
                <li>
                  Select the system that you feel is suitable for doing the work
                  task and start the search
                </li>
                <li>
                  During the search you can switch between two search systems
                  whenever you want
                </li>
                <li>
                  You may find information that you think are useful for doing
                  the work task at hand
                </li>
                <li>
                  Choose a way to save them for future use, such as: save, take
                  notes, and so on.
                </li>
              </ul>
            </li>
            <li>
              After completing the search for work task, complete the
              post-search questionnaire.
            </li>
            <li>Repeat steps 3 to 6 for work tasks 2 to 4</li>
            <li>Complete the demographic questionnaires </li>
          </ol>
          <p>
            Through pre-testing we estimate the completion of this online study
            to last approximately 60 minutes.
          </p>
        </section>
        <section className="consent-section">
          <h2>4. Risks and Benefits</h2>
          <p>
            There are no risks associated with this online study. Discomforts or
            inconveniences will be minor and are not likely to happen. If any
            discomforts become a problem, you may discontinue your
            participation. Your benefit in participating is 1VP.
          </p>
        </section>
        <section className="consent-section">
          <h2>5. Data Protection and Confidentiality</h2>
          <p>
            In this study, personal and personal data are collected for our
            research. The use of personal or subject-related information is
            governed by the European Union (EU) General Data Protection
            Regulation (GDPR) and will be treated in accordance with the GDPR.
            This means that you can view, correct, restrict processing, and
            delete the data collected in this study. Only with your agreement,
            we will log your input and manually record notes in the study. We
            plan to publish the results of this and other research studies in
            academic articles or other media. Your data will not be retained for
            longer than necessary or until you contact researchers to have your
            data destroyed or deleted. Access to the raw data, transcribed
            interviews, and observation protocols of the study is encrypted,
            password-protected and only accessible to the authors, colleagues
            and researchers collaborating on this research. Other members and
            administrators of our institution do not have access to your data.
            When publishing, the data will be anonymized using code numbers and
            published in aggregated form, so that without information from the
            researchers no conclusions can be drawn about individual persons.
            Any interview content or direct quotations from the interview, that
            are made available through academic publications or other academic
            outlets will also be anonymized using code numbers. Since no contact
            details (e.g. emails) are collected, the researchers cannot inform
            the participants about further details of the study or about a
            possible breach of confidential data.
          </p>
        </section>
        <section className="consent-section">
          <h2>6. Identification of Investigators</h2>
          <p>
            If you have any questions or concerns about the research, please
            feel free to contact:
          </p>
          <div className="contacts">
            <div>
              <strong>Researchers</strong>
              <ul>
                <li>
                  Johannes Wittmann <br />{" "}
                  (Johannes1.Wittmann@stud.uni-regensburg.de)
                </li>
                <li>
                  Nguyet Ha Phung <br />
                  (Nguyet-Ha1.Phung@stud.uni-regensburg.de)
                </li>
                <li>
                  Roman Görl <br />
                  (Roman.Goerl@stud.uni-regensburg.de)
                </li>
              </ul>
            </div>
            <div>
              <strong>Principle Investigator</strong>
              <ul>
                <li>David.Elsweiler@sprachlit.uni-regensburg.de</li>
                <li>
                  University of Regensburg <br />
                  Universitätsstr. 31 <br />
                  93053 Regensburg, Germany
                </li>
              </ul>
            </div>
          </div>
        </section>

        <form className="consent-agree" onSubmit={handleSubmit}>
          <div className="accept-consent">
            <input type="checkbox" required />
            <span>I have read and understood the consent form.</span>
          </div>
          <input
            className="id-input"
            placeholder="Please enter your ID"
            onChange={(e) => setUserId(e.target.value)}
            required
          />

          <button className="continue-btn">Continue</button>
        </form>
      </div>
    </>
  );
};

export default Consent;
