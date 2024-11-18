import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

// function HomepageHeader() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <header className={clsx('hero', styles.heroBanner)}>
//       <div className="container">
//         <Heading as="h1" className={styles.heroTitle}>{siteConfig.title}</Heading>
//         <p className="hero__subtitle">{siteConfig.tagline}</p>
//         {/*
//         <div className={styles.buttons}>
//           <Link
//             className="button button--secondary button--lg"
//             to="/docs/intro">
//             Docusaurus Tutorial - 5min ⏱️
//           </Link>
//         </div>
//         */}
//       </div>
//     </header>
//   );
// }

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  // return (
  //   <Layout
  //     title={`首页`}
  //     description="杂记簿，记录生活的碎碎念......">
  //     <HomepageHeader />
  //     {/*
  //     <main>
  //       <HomepageFeatures />
  //     </main>
  //     */}
  //   </Layout>
  // );
  return(
    <div style={{height:'100vh', display:'flex', justifyContent:'center', alignItems:'center', backgroundColor:'black', color:'white'}}>
      <h1 style={{fontSize:'150px', marginBottom:'15vh'}}>{siteConfig.title}</h1>
    </div>
  );
}
