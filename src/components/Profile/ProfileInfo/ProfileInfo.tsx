import lake from "../../../pic/canada-in-pictures-beautiful-places-to-photograph-morraine-lake.jpg";
import React from "react";
import s from "./ProfileInfo.module.css"

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src={lake} alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}