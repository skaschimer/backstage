import { BoxSvg } from './svgs/box';
import { FlexSvg } from './svgs/flex';
import { GridSvg } from './svgs/grid';
import { ContainerSvg } from './svgs/container';
import styles from './LayoutComponents.module.css';
import Link from 'next/link';

export const LayoutComponents = () => {
  return (
    <div className={styles.layoutComponents}>
      <div className={styles.box}>
        <Link className={styles.content} href="/components/box">
          <BoxSvg />
        </Link>
        <div className={styles.title}>Box</div>
        <div className={styles.description}>
          The most basic layout component
        </div>
      </div>
      <div className={styles.box}>
        <Link className={styles.content} href="/components/flex">
          <FlexSvg />
        </Link>
        <div className={styles.title}>Flex</div>
        <div className={styles.description}>
          Arrange your components vertically
        </div>
      </div>
      <div className={styles.box}>
        <Link className={styles.content} href="/components/grid">
          <GridSvg />
        </Link>
        <div className={styles.title}>Grid</div>
        <div className={styles.description}>
          Arrange your components in a grid
        </div>
      </div>
      <div className={styles.box}>
        <Link className={styles.content} href="/components/container">
          <ContainerSvg />
        </Link>
        <div className={styles.title}>Container</div>
        <div className={styles.description}>
          A container for your components
        </div>
      </div>
    </div>
  );
};
