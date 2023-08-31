import Layouts from "@layouts/Layouts";

import { getSortedPostsData } from "@library/posts";

import PageBanner from "@components/PageBanner";
import CallToActionSection from "@components/sections/CallToAction";

const Story = ( props ) => {
  return (
    <Layouts 
      rightPanelBackground={"/img/person/bg-4.jpg"}
      rightPanelImg={"/img/person/4.png"}
    >
      <PageBanner pageTitle={"Experience personnelle"} />
      
      {/* story */}
      <section>
          <div className="row">
              <div className="col-xl-6">

                  <div className="mil-section-title mil-up mil-left mil-mb-90">
                      <div className="mil-divider"></div>
                      <h3>Éducation:</h3>
                  </div>

                  <div className="mil-timeline mil-mb-90">
                      <div className="mil-timeline-track"></div>
                      <ul>
                          <li className="mil-up">
                              <div className="mil-item-head mil-mb-5">
                                  <h4>Université du Québec à Trois-Rivières</h4>
                                  <div className="mil-text-sm">2019 - 2023</div>
                              </div>
                              <p className="mil-text-sm mil-mb-15">Étudiant</p>
                              <p>Maîtrise en science de la gestion, option: Marketing numérique</p>
                          </li>
                          <li className="mil-up">
                              <div className="mil-item-head mil-mb-5">
                                  <h4>Ehec Alger</h4>
                                  <div className="mil-text-sm">2012 - 2017</div>
                              </div>
                              <p className="mil-text-sm mil-mb-15">Étudiant</p>
                              <p>Maitrise en science commercial, option: Marketing</p>
                          </li>
                          <li className="mil-up">
                              <div className="mil-item-head mil-mb-5">
                                  <h4>Scalables-ads</h4>
                                  <div className="mil-text-sm">2022</div>
                              </div>
                              <p className="mil-text-sm mil-mb-15">Étudiant</p>
                              <p>Formation spécialisé en Google ads, Google analytics et les réseaux sociaux (Facebook, instagram, Tiktok...). </p>
                          </li>
                      </ul>
                  </div>

              </div>
              <div className="col-xl-6">

                  <div className="mil-section-title mil-up mil-left mil-mb-90">
                      <div className="mil-divider"></div>
                      <h3>Experience de travail:</h3>
                  </div>

                  <div className="mil-timeline mil-mb-90">
                      <div className="mil-timeline-track"></div>
                      <ul>
                          <li className="mil-up">
                              <div className="mil-item-head mil-mb-5">
                                  <h4>Musée Gilles-Villeneuve</h4>
                                  <div className="mil-text-sm">2020 - 2023</div>
                              </div>
                              <p className="mil-text-sm mil-mb-15">Stagiaire en web et marketing numérique</p>
                              <p>Responsable de la gestion du site web du musée, de la gestion de la boutique en ligne ainsi que je la gesion des réseaux sociaux.
                                Planification et realiser de projets (Visite virtuelle, plateforme de donation, ancan web et billeterie en ligne)
                              </p>
                          </li>
                          <li className="mil-up">
                              <div className="mil-item-head mil-mb-5">
                                  <h4>Botan Pizza</h4>
                                  <div className="mil-text-sm">2020 - 2023</div>
                              </div>
                              <p className="mil-text-sm mil-mb-15">Propriétaire</p>
                              <p>Gestion globale de l'entreprise : Superviser toutes les opérations du restaurant, y compris la gestion du personnel,la gestion du contenu en ligne, les finances, les approvisionnements, etc.</p>
                          </li>
                      </ul>
                  </div>

              </div>
          </div>
      </section>
      {/* story end */}

      <CallToActionSection />
    </Layouts>
  );
};
export default Story;

export async function getStaticProps() {
  const allPosts = getSortedPostsData();

  return {
    props: {
      posts: allPosts
    }
  }
}