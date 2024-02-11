import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'fhwqagads',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in ipsum tincidunt, facilisis sapien eget, pretium elit. 
        Suspendisse quis est interdum, imperdiet dolor non, dictum felis.
      </>
    ),
  },
  {
    title: 'Lorem Ipsum',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Curabitur magna enim, accumsan vitae massa ut, <code>ullamcorper</code> luctus ligula. 
      </>
    ),
  },
  {
    title: '它起源于',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        也称乱数假文或者哑元文本
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
