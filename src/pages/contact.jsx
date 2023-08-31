import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";
import { Formik } from 'formik';
import appData from "@data/app.json";

const Contact = () => {
  return (
    <Layouts
      rightPanelBackground={"/img/person/bg-2.jpg"}
      rightPanelImg={"/img/person/7.png"}
    >
        <PageBanner pageTitle={"Entrez en contact avec moi !"} align={"center"} />
      
        {/* info */}
        <div>
            <ul className="mil-puplication-details mil-up mil-mb-90">
                <li>
                    <span className="mil-upper mil-accent">Par Téléphone: </span>&nbsp;&nbsp;
                    <span className="mil-upper mil-dark">+1(873) 255 5707</span>
                </li>
                <li>
                    <span className="mil-upper mil-accent">Par E-mail: </span>&nbsp;&nbsp;
                    <span className="mil-upper mil-dark">ala.eddine.kahlat@uqtr.ca</span>
                </li>
            </ul>
        </div>

        {/* map */}
        <div className="mil-map mil-mb-90">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2754.109421787742!2d-72.5779399232339!3d46.34737267408015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDbCsDIwJzUwLjUiTiA3MsKwMzQnMzEuMyJX!5e0!3m2!1sfr!2sca!4v1692298453817!5m2!1sfr!2sca" 
              style={{"border": "0"}} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade" 
            />
        </div>
        {/* map end */}

        <div className="mil-section-title mil-up">
            <div className="mil-divider" />
            <h3>Lançons la discussion !</h3>
        </div>

        {/* contact */}
        <div id="contact" className="mil-p-90-60">
        <Formik
            initialValues = {{ email: '', name: '', message: '' }}
            validate = { values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Nécessaire';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'adresse E-mail invalide :/';
                }
                return errors;
            }}
            onSubmit = {( values, { setSubmitting } ) => {
                const form = document.getElementById("contactForm");
                const status = document.getElementById("contactFormStatus");
                const data = new FormData();

                data.append('name', values.name);
                data.append('email', values.email);
                data.append('message', values.message);

                fetch(form.action, {
                    method: 'POST',
                    body: data,
                    headers: {
                        'Accept': 'application/json'
                    }
                }).then(response => {
                    if (response.ok) {
                        status.innerHTML = "Merci pour la soumission du formulaire";
                        form.reset()
                    } else {
                        response.json().then(data => {
                            if (Object.hasOwn(data, 'errors')) {
                                status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                            } else {
                                status.innerHTML = "Oops! Malheureusement il y a eu un problème lors de la soumission"
                            }
                        })
                    }
                }).catch(error => {
                    status.innerHTML = "Oops! Malheureusement il y a eu un problème lors de la soumission du formulaire"
                });

                setSubmitting(false);
            }}
            >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
            }) => (
            <form onSubmit={handleSubmit} id="contactForm" action={appData.settings.formspreeURL} className="row align-items-center">
                <div className="col-lg-6 mil-up">
                    <input 
                      type="text" 
                      placeholder="Quel est votre nom"
                      name="nom" 
                      required="Nécessaire" 
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name} 
                    />
                </div>
                <div className="col-lg-6 mil-up">
                    <input 
                      type="email" 
                      placeholder="Votre E-mail"
                      name="email"
                      required="Nécessaire"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email} 
                    />
                </div>
                <div className="col-lg-12 mil-up">
                    <textarea 
                      placeholder="Parlez moi de votre projet"
                      name="message" 
                      required="Nécessaire"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.message} 
                    />
                </div>
                <div className="col-lg-8">
                    <p className="mil-up mil-mb-30"><span className="mil-accent">*</span> Je promets de garder la confidentialité de vos informations</p>
                </div>
                <div className="col-lg-4">
                    <div className="mil-adaptive-right mil-up mil-mb-30">
                        <button type="submit" className="mil-btn mil-sm-btn">
                            <span>Envoyé le message</span>
                        </button>
                    </div>
                </div>
                <div className="form-status" id="contactFormStatus" />
            </form>
            )}
            </Formik>
        </div>
        {/* contact end */}
    
    </Layouts>
  );
};
export default Contact;
