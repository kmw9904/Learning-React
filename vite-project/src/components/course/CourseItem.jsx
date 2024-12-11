function HeartIconBtn({ onClick, isFavorite }) {
  return (
    <button className="btn" onClick={(e) => onClick(e)}>
      <img className="btn__img" src={isFavorite ? "public/img/heart-fill-icon.svg" : "public/img/heart-icon.svg"} alt="" />
    </button>
  );
}

function LinkIconBtn({ link }) {
  return (
    <a className="btn" href={link} target="_blank" rel="noreferrer">
      <img className="btn__img" src="public/img/link-icon.svg" />
    </a>
  );
}

function CourseItem({ title, description, thumbnail, isFavorite, link }) {
  function handleFavorite(e) {
    e.stopPropagation();
    alert(isFavorite ? "좋아요" : "모르겠어요");
  }
  function handleItemClick() {
    open(link, "_blank");
  }

  return (
    <div>
      <article class="course" onClick={handleItemClick}>
        <img class="course__img" src={thumbnail} alt="강의 이미지" />
        <div class="course__body">
          <div class="course__title">{title}</div>
          <div class="course__description">{description}</div>
        </div>
        <div className="course__icons">
          <HeartIconBtn isFavorite={isFavorite} onClick={handleFavorite} />
          {link && <LinkIconBtn link={link} />}
        </div>
      </article>
    </div>
  );
}

export default CourseItem;
