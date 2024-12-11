import { Fragment } from "react";
import React from "react";
import CourseItem from "./CourseItem";
import Card from "../card/Card";

function CourseListCard({ title, items }) {
  const lastIndex = items.length - 1;

  return (
    <>
      <Card title={title}>
        <div class="courses">
          {items.map((item, index) => (
            <Fragment key={item.id}>
              <CourseItem {...item} />
              {lastIndex !== index && <hr className="divider" />}
            </Fragment>
          ))}  
        </div>
      </Card>
    </>
  );
}

export default CourseListCard;
