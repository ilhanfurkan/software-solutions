import styles from './index.module.scss';

import Container from '../XContainer';

interface IProps {
  marqueTitle?: string;
  multiTitle: string;
  title: string;
}

export const XPageTitle: React.FC<IProps> = ({
  marqueTitle,
  multiTitle,
  title
}) => {
  return (
    <div style={{ overflow: 'hidden' }}>
      <Container>
        <section className={styles.wrapper}>
          <div className={styles.multi_title}>{multiTitle}</div>
          <div className={styles.title}>{title}</div>
        </section>
      </Container>
      {marqueTitle && (
        <div className={styles.main_marq}>
          <div className={styles.slide}>
            <div className={styles.box}>
              <div className={styles.item}>
                <h2>{marqueTitle}</h2>
              </div>
              <div className={styles.item}>
                <h2>{marqueTitle}</h2>
              </div>
              <div className={styles.item}>
                <h2>{marqueTitle}</h2>
              </div>
              <div className={styles.item}>
                <h2>{marqueTitle}</h2>
              </div>
              <div className={styles.item}>
                <h2>{marqueTitle}</h2>
              </div>
              <div className={styles.item}>
                <h2>{marqueTitle}</h2>
              </div>
              <div className={styles.item}>
                <h2>{marqueTitle}</h2>
              </div>
              <div className={styles.item}>
                <h2>{marqueTitle}</h2>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};