import styles from './main.module.css'

function Main () {
    return (
        <div>
            <section className={styles.Space_Intro}>
                <div className={styles.Space_Container}> 
                    <div className={styles.Space_Intro_Context}>
                        <h1>All-in-One Solution <br/>for Software Teams and Projects</h1>
                        <p>Space is a fully integrated toolchain that connects the software development pipeline, communication, and project management.</p>
                        <div className={styles.Space_Intro_Context_list}>
                        <ul>
                            <li>
                            <svg viewBox="0 0 24 24" className={styles.Intro_Svg}><path d="M8.416 20.414l-6.123-6.123 1.414-1.414 4.709 4.709L21.209 4.793l1.414 1.414L8.416 20.414z"></path></svg>
                            Everything your company needs in one tool
                            </li>
                            <li>
                            <svg viewBox="0 0 24 24" className={styles.Intro_Svg}><path d="M8.416 20.414l-6.123-6.123 1.414-1.414 4.709 4.709L21.209 4.793l1.414 1.414L8.416 20.414z"></path></svg>
                            Covers the processes of the whole team
                            </li>
                            <li>
                            <svg viewBox="0 0 24 24" className={styles.Intro_Svg}><path d="M8.416 20.414l-6.123-6.123 1.414-1.414 4.709 4.709L21.209 4.793l1.414 1.414L8.416 20.414z"></path></svg>
                            Scales with your organization
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div className={styles.Intro_SignUp}>
                        <div className={styles.Intro_SignUp_Content}>
                            <h2>Give Your Software Team a Digital Home for Free</h2>
                            <a href='https://www.jetbrains.com/space/app/login'>Try for free</a>
                        </div>
                    </div>
                    <div className={styles.Space_Animation}>
                        <div className={styles.Space_Animation_Center}></div>
                        <div className={styles.Space_Animation_Left}></div>
                        <div className={styles.Space_Animation_Right}></div>
                    </div>
                </div>
            </section>
            <section className={styles.Space_Description}>
                <div className={styles.Space_Container}>
                    <h2 className={styles.Space_Heading}>Developer Software and <br/> Colloborate in One PLace</h2>
                    <div className={styles.SpaceFlex}>
                        <div className={styles.SpaceFlexLeft}>
                            <p><span className={styles.Span_normal}>No matter the size of your business or how long you have been around, there are always things you need to manage.</span><span className={styles.Span_Bold}>To help you focus on what's important, we’ve created Space, an integrated team environment.</span></p>
                            <ul>
                                <li>Space unifies tooling and information across your company, bringing more effective collaboration to your team.</li>
                                <li>Manage all the aspects of your tech business from source control hosting to running meetings.</li>
                                <li>Communicate in chats, collaborate on projects, share knowledge, and build and deliver software together.</li>
                            </ul>
                        </div>
                        <div className={styles.SpaceFlexLeft}>
                            <img src='https://www.jetbrains.com/_assets/www/space/solutions/software-teams/img/bg-video.a3886b483dfcd04ef5286eb50b5bc7ea.png'></img>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.SpaceFeatures}>
                <div className={styles.Space_Container}>
                    <div className={styles.Features_Control}>
                        <div className={styles.Features_Button}>
                            <button className={`${styles.Button_Active} ${styles.Features_Button_Content}`}>Software Development</button>
                        </div>
                        <div className={styles.Features_Button}>
                            <button className={styles.Features_Button_Content}>Business Management</button>
                        </div>
                        <div className={styles.Features_Button}>
                            <button className={styles.Features_Button_Content}>Project management</button>
                        </div>
                        <div className={styles.Features_Button}>
                            <button className={styles.Features_Button_Content}>Communications</button>
                        </div>
                        <div className={styles.Features_Button}>
                            <button className={styles.Features_Button_Content}>Team Management</button>
                        </div>
                    </div>
                    <div className={styles.Features_Slideshow_Container}>
                        <div className={styles.Features_Slideshow_Flex}>
                            <div className={styles.Features_Slideshow_flex_left}>
                                <h2>Software Development</h2>
                                <p>Covering <a href='#'>software development</a> pipelines at every scale, Space includes everything you need to speed up production, giving developers the freedom to grow, discover, collaborate, and create:</p>
                                <ul>
                                    <li>Source code hosting (Git)</li>
                                    <li>Code review, including merge requests and quality gates</li>
                                    <li>Automation jobs for building and deploying applications</li>
                                    <li>Package and container registries for publishing artifacts</li>
                                    <li>Plugins to connect Space to your favorite IntelliJ-based IDEs</li>
                                </ul>
                            </div>
                            <div className={styles.Features_Slideshow_flex_right}>
                                <img src='https://www.jetbrains.com/space/solutions/software-teams/img/features/01.png'></img>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.Space_cards}>
                <div className={styles.Space_Container}>
                    <h2 className={styles.Cards_Heading}>The Complete Solution for Software Teams and Projects</h2>
                    <div className={styles.CardsList}>
                        <div className={styles.CardsLisItem}>
                        <svg  fill="none" viewBox="0 0 42 42" id="icon-tech"><linearGradient id="icon-tech_a" gradientUnits="userSpaceOnUse" x1="16.625" x2="26" y1="15.375" y2="26"><stop offset="0" stop-color="#bfffea"></stop><stop offset="1" stop-color="#80e5c3"></stop></linearGradient>
                        <linearGradient id="icon-tech_b" gradientUnits="userSpaceOnUse" x1="11" x2="31.5" y1="10" y2="33"><stop offset="0" stop-color="#136b4e"></stop><stop offset="1" stop-color="#054732"></stop></linearGradient>
                        <rect fill="#4ca789" height="42" rx="8" width="42"></rect><path d="m16 16h10v10h-10z" fill="url(#icon-tech_a)"></path><path clip-rule="evenodd" d="m15 7h2v2h3v-2h2v2h3v-2h2v2h1.6364c2.4099 0 4.3636 1.9537 4.3636 4.3636v1.6364h2v2h-2v3h2v2h-2v3h2v2h-2v1.6364c0 2.4099-1.9537 4.3636-4.3636 4.3636h-1.6364v2h-2v-2h-3v2h-2v-2h-3v2h-2v-2h-1.6364c-2.4099 0-4.3636-1.9537-4.3636-4.3636v-1.6364h-2v-2h2v-3h-2v-2h2v-3h-2v-2h2v-1.6364c0-2.4099 1.9537-4.3636 4.3636-4.3636h1.6364zm13.6364 6.3636h-15.2728v15.2728h15.2728z" fill="url(#icon-tech_b)" fill-rule="evenodd"></path></svg>
                        <h3>Perfect for Tech Companies</h3>
                        <p>Space covers the entire software development life cycle. It has everything from source code hosting to package management.</p>
                        </div>
                        <div className={styles.CardsLisItem}>
                        <svg  fill="none" viewBox="0 0 42 42" id="icon-tech"><linearGradient id="icon-tech_a" gradientUnits="userSpaceOnUse" x1="16.625" x2="26" y1="15.375" y2="26"><stop offset="0" stop-color="#bfffea"></stop><stop offset="1" stop-color="#80e5c3"></stop></linearGradient>
                        <linearGradient id="icon-tech_b" gradientUnits="userSpaceOnUse" x1="11" x2="31.5" y1="10" y2="33"><stop offset="0" stop-color="#136b4e"></stop><stop offset="1" stop-color="#054732"></stop></linearGradient>
                        <rect fill="#4ca789" height="42" rx="8" width="42"></rect><path d="m16 16h10v10h-10z" fill="url(#icon-tech_a)"></path><path clip-rule="evenodd" d="m15 7h2v2h3v-2h2v2h3v-2h2v2h1.6364c2.4099 0 4.3636 1.9537 4.3636 4.3636v1.6364h2v2h-2v3h2v2h-2v3h2v2h-2v1.6364c0 2.4099-1.9537 4.3636-4.3636 4.3636h-1.6364v2h-2v-2h-3v2h-2v-2h-3v2h-2v-2h-1.6364c-2.4099 0-4.3636-1.9537-4.3636-4.3636v-1.6364h-2v-2h2v-3h-2v-2h2v-3h-2v-2h2v-1.6364c0-2.4099 1.9537-4.3636 4.3636-4.3636h1.6364zm13.6364 6.3636h-15.2728v15.2728h15.2728z" fill="url(#icon-tech_b)" fill-rule="evenodd"></path></svg>
                        <h3>Integration with JetBrains IDEs</h3>
                        <p>Review and comment on code using the power of IDE navigation. Manage your merge requests and code reviews without leaving your IDE.</p>
                        </div>
                        <div className={styles.CardsLisItem}>
                        <svg  fill="none" viewBox="0 0 42 42" id="icon-tech"><linearGradient id="icon-tech_a" gradientUnits="userSpaceOnUse" x1="16.625" x2="26" y1="15.375" y2="26"><stop offset="0" stop-color="#bfffea"></stop><stop offset="1" stop-color="#80e5c3"></stop></linearGradient>
                        <linearGradient id="icon-tech_b" gradientUnits="userSpaceOnUse" x1="11" x2="31.5" y1="10" y2="33"><stop offset="0" stop-color="#136b4e"></stop><stop offset="1" stop-color="#054732"></stop></linearGradient>
                        <rect fill="#4ca789" height="42" rx="8" width="42"></rect><path d="m16 16h10v10h-10z" fill="url(#icon-tech_a)"></path><path clip-rule="evenodd" d="m15 7h2v2h3v-2h2v2h3v-2h2v2h1.6364c2.4099 0 4.3636 1.9537 4.3636 4.3636v1.6364h2v2h-2v3h2v2h-2v3h2v2h-2v1.6364c0 2.4099-1.9537 4.3636-4.3636 4.3636h-1.6364v2h-2v-2h-3v2h-2v-2h-3v2h-2v-2h-1.6364c-2.4099 0-4.3636-1.9537-4.3636-4.3636v-1.6364h-2v-2h2v-3h-2v-2h2v-3h-2v-2h2v-1.6364c0-2.4099 1.9537-4.3636 4.3636-4.3636h1.6364zm13.6364 6.3636h-15.2728v15.2728h15.2728z" fill="url(#icon-tech_b)" fill-rule="evenodd"></path></svg>
                        <h3>Scales with Your Business</h3>
                        <p>You can easily scale Space as your company grows and more teams join the platform. Space can be customized and extended to meet your exact needs.</p>
                        </div>
                        <div className={styles.CardsLisItem}>
                        <svg  fill="none" viewBox="0 0 42 42" id="icon-tech"><linearGradient id="icon-tech_a" gradientUnits="userSpaceOnUse" x1="16.625" x2="26" y1="15.375" y2="26"><stop offset="0" stop-color="#bfffea"></stop><stop offset="1" stop-color="#80e5c3"></stop></linearGradient>
                        <linearGradient id="icon-tech_b" gradientUnits="userSpaceOnUse" x1="11" x2="31.5" y1="10" y2="33"><stop offset="0" stop-color="#136b4e"></stop><stop offset="1" stop-color="#054732"></stop></linearGradient>
                        <rect fill="#4ca789" height="42" rx="8" width="42"></rect><path d="m16 16h10v10h-10z" fill="url(#icon-tech_a)"></path><path clip-rule="evenodd" d="m15 7h2v2h3v-2h2v2h3v-2h2v2h1.6364c2.4099 0 4.3636 1.9537 4.3636 4.3636v1.6364h2v2h-2v3h2v2h-2v3h2v2h-2v1.6364c0 2.4099-1.9537 4.3636-4.3636 4.3636h-1.6364v2h-2v-2h-3v2h-2v-2h-3v2h-2v-2h-1.6364c-2.4099 0-4.3636-1.9537-4.3636-4.3636v-1.6364h-2v-2h2v-3h-2v-2h2v-3h-2v-2h2v-1.6364c0-2.4099 1.9537-4.3636 4.3636-4.3636h1.6364zm13.6364 6.3636h-15.2728v15.2728h15.2728z" fill="url(#icon-tech_b)" fill-rule="evenodd"></path></svg>
                        <h3>Cost Saving Solution</h3>
                        <p>Instead of paying for multiple solutions, get one platform with the complete software development, project management, and communication toolchain your business needs.</p>
                        </div>
                        <div className={styles.CardsLisItem}>
                        <svg  fill="none" viewBox="0 0 42 42" id="icon-tech"><linearGradient id="icon-tech_a" gradientUnits="userSpaceOnUse" x1="16.625" x2="26" y1="15.375" y2="26"><stop offset="0" stop-color="#bfffea"></stop><stop offset="1" stop-color="#80e5c3"></stop></linearGradient>
                        <linearGradient id="icon-tech_b" gradientUnits="userSpaceOnUse" x1="11" x2="31.5" y1="10" y2="33"><stop offset="0" stop-color="#136b4e"></stop><stop offset="1" stop-color="#054732"></stop></linearGradient>
                        <rect fill="#4ca789" height="42" rx="8" width="42"></rect><path d="m16 16h10v10h-10z" fill="url(#icon-tech_a)"></path><path clip-rule="evenodd" d="m15 7h2v2h3v-2h2v2h3v-2h2v2h1.6364c2.4099 0 4.3636 1.9537 4.3636 4.3636v1.6364h2v2h-2v3h2v2h-2v3h2v2h-2v1.6364c0 2.4099-1.9537 4.3636-4.3636 4.3636h-1.6364v2h-2v-2h-3v2h-2v-2h-3v2h-2v-2h-1.6364c-2.4099 0-4.3636-1.9537-4.3636-4.3636v-1.6364h-2v-2h2v-3h-2v-2h2v-3h-2v-2h2v-1.6364c0-2.4099 1.9537-4.3636 4.3636-4.3636h1.6364zm13.6364 6.3636h-15.2728v15.2728h15.2728z" fill="url(#icon-tech_b)" fill-rule="evenodd"></path></svg>
                        <h3>Designed to Streamline Collaboration</h3>
                        <p>Space removes the silos between different teams and specialists by connecting development, project management, and collaboration features.</p>
                        </div>
                        <div className={styles.CardsLisItem}>
                        <svg  fill="none" viewBox="0 0 42 42" id="icon-tech"><linearGradient id="icon-tech_a" gradientUnits="userSpaceOnUse" x1="16.625" x2="26" y1="15.375" y2="26"><stop offset="0" stop-color="#bfffea"></stop><stop offset="1" stop-color="#80e5c3"></stop></linearGradient>
                        <linearGradient id="icon-tech_b" gradientUnits="userSpaceOnUse" x1="11" x2="31.5" y1="10" y2="33"><stop offset="0" stop-color="#136b4e"></stop><stop offset="1" stop-color="#054732"></stop></linearGradient>
                        <rect fill="#4ca789" height="42" rx="8" width="42"></rect><path d="m16 16h10v10h-10z" fill="url(#icon-tech_a)"></path><path clip-rule="evenodd" d="m15 7h2v2h3v-2h2v2h3v-2h2v2h1.6364c2.4099 0 4.3636 1.9537 4.3636 4.3636v1.6364h2v2h-2v3h2v2h-2v3h2v2h-2v1.6364c0 2.4099-1.9537 4.3636-4.3636 4.3636h-1.6364v2h-2v-2h-3v2h-2v-2h-3v2h-2v-2h-1.6364c-2.4099 0-4.3636-1.9537-4.3636-4.3636v-1.6364h-2v-2h2v-3h-2v-2h2v-3h-2v-2h2v-1.6364c0-2.4099 1.9537-4.3636 4.3636-4.3636h1.6364zm13.6364 6.3636h-15.2728v15.2728h15.2728z" fill="url(#icon-tech_b)" fill-rule="evenodd"></path></svg>
                        <h3>Ideal for Remote Work</h3>
                        <p>Space will help you run all your business processes online, keeping everyone informed and up to date without overloading them with irrelevant information.</p>
                        </div>
                    </div>
                    <div className={styles.CardsBottomText}>
                        <p>Get started with the free cloud plan for an unlimited number of users, and then <a href='#'>upgrade</a> when you're ready</p>
                    </div>
                    <div className={styles.VideoPreview}>
                        <button>
                        <svg viewBox="0 0 24 24" class="wt-icon wt-icon_size_m _wt-button__icon_1df2673_609"><path d="m16 12-8 7v-14z"></path></svg>
                        Watch the Space Overview Video
                        </button>
                    </div>
                </div>
            </section>
            <section>
                <div className={styles.Space_Container}>
                    <div className={styles.Space_GetStarted}>
                        <h2>Get started with Space today</h2>
                        <p>Give Your Software Team a Digital Home for Free</p>
                        <a href='#'>Try for free</a>
                    </div>
                </div>
            </section>
            <section>
                <div className={styles.Space_Container}>
                    <div className={styles.Benefit_Flex}>
                        <div className={styles.Benefit_Content}>
                            <h2>Discover How Other Software Teams Benefit From Using Space</h2>
                        </div>
                    </div>  
                    <div className={styles.Benefit_Flex}>
                        <div className={styles.Benefit_Flex_Content}>
                            <div className={styles.BenefitBottomFlex}>
                                <div className={styles.BenefitBottomFlexContent}>
                                    <h3>Makery</h3>
                                    <p>Rather than using a multitude of individual tools, we’ve always preferred integrated environments. We started looking for a new digital home, and when we heard about Space at KotlinConf, we really liked the concept. So we decided to sign up.
                                    <a>Read story</a></p>
                                    <div className={styles.BenefitFlexBottom}>
                                        <img src='https://www.jetbrains.com/_assets/common-ui/components/space-feedback/img/kindler-avatar.da44a51c45e7d7397bb60eca279eb0ab.png'></img>
                                        <div className={styles.BenefitFlexBottomText}>
                                            <p className={styles.BenefitName}>Andras Kindler,</p>
                                            <p className={styles.BenefitJob}>Co-Founder, <br/>Makery</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.BenefitBottomFlexContent}>
                                    <h3>AmberCore Software Ltd</h3>
                                    <p>Communication has become faster since we started using Space. I think the deciding factors in choosing to go with Space were its ease of use and versatility
                                    <a>Read story</a></p>
                                    <div className={styles.BenefitFlexBottom}>
                                        <img src='https://www.jetbrains.com/_assets/common-ui/components/space-feedback/img/vinogradova-avatar.c410be4d24099df636473077adecde0d.png'></img>
                                        <div className={styles.BenefitFlexBottomText}>
                                            <p className={styles.BenefitName}>Anna Vinogradova,</p>
                                            <p className={styles.BenefitJob}>Chief Marketing Officer, <br/>AmberCore Software Ltd</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.BottomSection}>
                <div className={styles.Space_Container}>
                    <div className={styles.BottomContainer}>
                        <div className={styles.BottomLeft}>
                            <h2>Get a Complete Solution for Software Development by Connecting JetBrains IDEs to Space</h2>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Main