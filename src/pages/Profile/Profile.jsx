import styles from "./Profile.module.scss";
import { Link } from "react-router-dom";
import yellowStar from "../../assets/images/yellow-star.svg";
import purpleStar from "../../assets/images/purple-star.svg";
import avatar03 from "../../assets/images/avatar-03.svg";
import rightArrow from "../../assets/images/right-arrow.svg";
import { useContextAuth } from "../../providers/AuthContext";

export function Profile() {
  const { userData } = useContextAuth();
  console.log(userData)

  return (
    <main className={styles.profileContainer}>
      <div className={styles.profileContainerSectionImage}> 
        <div className={styles.profileContainerSectionImageAvatar}>
          <img
          alt="foto de pefil"
          src={avatar03}
            // usar esse ternario quando tudo estiver setado:
            // src={userData?.avatar == null ? avatar03 : userData?.avatar}
            className={styles.profileContainerSectionImageAvatarIcon}
          />
        </div>
        <div className={styles.profileContainerSectionImageEdit}>
          <Link to="edit">
            <button className={styles.profileContainerSectionImageEditButton}>
              Editar
            </button>
          </Link>
        </div>
      </div>

      <div className={styles.profileContainerSectionInfo}>
        <div className={styles.profileContainerSectionInfoName}>
          <p className={styles.profileContainerSectionInfoNameText}>
            {userData?.username}
          </p>
        </div>

        <div className={styles.profileContainerSectionInfoStar}>
          <div className={styles.profileContainerSectionInfoStarContent}>
            <img
              src={yellowStar}
              alt="star"
              className={`${styles.profileContainerSectionInfoStarContentImage} ${styles.profileContainerSectionInfoStarContentImageYellow}`}
            />

            <p
              className={`${styles.profileContainerSectionInfoStarContentNumber} ${styles.profileContainerSectionInfoStarContentNumberYellow}`}
            >
              292
            </p>
          </div>

          <div className={styles.profileContainerSectionInfoStarContent}>
            <img
              src={purpleStar}
              alt="star"
              className={`${styles.profileContainerSectionInfoStarContentImage} ${styles.profileContainerSectionInfoStarContentImagePurple}`}
            />

            <p
              className={`${styles.profileContainerSectionInfoStarContentNumber} ${styles.profileContainerSectionInfoStarContentNumberPurple}`}
            >
              0
            </p>
          </div>
        </div>

        <div className={styles.profileContainerSectionInfoDate}>
          <p className={styles.profileContainerSectionInfoDateLastSeen}>
            Ativo pela última vez em <strong></strong>
          </p>
          <p className={styles.profileContainerSectionInfoDateSignedIn}>
            Entrou em <strong>{userData?.created_at}</strong>
          </p>
        </div>
      </div>

      <div className={styles.profileContainerLastAnswers}>
        <div className={styles.profileContainerLastAnswersTitle}>
          <p className={styles.profileContainerLastAnswersTitleText}>
            Últimas respostas:
          </p>
        </div>

        <div className={styles.profileContainerLastAnswersCard}>
          <Link to="/" className={styles.profileContainerLastAnswersCardLink}>
            <div className={styles.profileContainerLastAnswersCardLinkHeader}>
              <div
                className={
                  styles.profileContainerLastAnswersCardLinkHeaderImage
                }
              >
                <img
                  src={avatar03}
                  alt=""
                  className={
                    styles.profileContainerLastAnswersCardLinkHeaderImageIcon
                  }
                />
              </div>
              <div
                className={
                  styles.profileContainerLastAnswersCardLinkHeaderNickname
                }
              >
                <Link to="">
                <p
                  className={
                    styles.profileContainerLastAnswersCardLinkHeaderNicknameText
                  }
                >{userData?.username}</p>
                </Link>
              </div>

              <div
                className={
                  styles.profileContainerLastAnswersCardLinkHeaderBadge
                }
              >
                <p
                  className={
                    styles.profileContainerLastAnswersCardLinkHeaderBadgeText
                  }
                >
                  Ouro
                </p>
              </div>
            </div>

            <div className={styles.profileContainerLastAnswersCardLinkContent}>
              <div
                className={
                  styles.profileContainerLastAnswersCardLinkContentContainer
                }
              >
                <p
                  className={
                    styles.profileContainerLastAnswersCardLinkContentContainerText
                  }
                >
                  A arte digital é a maneira que o artista se relaciona com a
                  maquina, hardware ou software , na atualidade é comum se
                  deparar com a arte digital , ela esta por todo canto…
                </p>

                <img
                  src={rightArrow}
                  alt=""
                  className={
                    styles.profileContainerLastAnswersCardLinkContentContainerArrow
                  }
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
