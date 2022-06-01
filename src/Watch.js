import React, { useEffect, useState } from "react";
import Title from "./title.png";

const Watch = ({items , today , city , setCity}) => {

  return (
    <>
      <img src={Title} alt="مواقيت الصلاة" />
      <div className="dates">
        <h3>
          التاريخ الهجري :
          <span lang="en">
            {items.data[today - 1].date.hijri.date}
          </span>
        </h3>
        <h3>
          التاريخ الميلادي :
          <span lang="en">
            {items.data[today - 1].date.gregorian.date}
          </span>
        </h3>
        <h3>
          اليوم :
          <span>
            {items.data[today - 1].date.hijri.weekday.ar}
          </span>
        </h3>
        <h3>
          نظام الحساب :
          <span lang="en">
            {items.data[today - 1].meta.method.name}
          </span>
        </h3>
        <h3>
          المدينة :
          <span>
            <select
              onChange={(e) => {
                setCity(e.target.value);
              }}
            >
              <option value="Mecca">مكة المكرَّمة</option>
              <option value="Amman">عمّان</option>
              <option value="Medina">المدينة المنوّرة</option>
              <option value="Quds">القدس</option>
              <option value="Riyadh">الرّياض</option>
              <option value="Cairo">القاهرة</option>
              <option value="Chicago">شيكاغو</option>
            </select>
          </span>
        </h3>
      </div>
      <div className="watch">
        <div className="houer">
          <p>صلاة الفجر</p>
          <span lang="en">
            {items.data[today - 1].timings.Fajr}
          </span>
        </div>
        <div className="houer">
          <p>الشروق</p>
          <span lang="en">
            {items.data[today - 1].timings.Sunrise}
          </span>
        </div>
        <div className="houer">
          <p>صلاة الظهر</p>
          <span lang="en">
            {items.data[today - 1].timings.Dhuhr}
          </span>
        </div>
        <div className="houer">
          <p>صلاة العصر</p>
          <span lang="en">
            {items.data[today - 1].timings.Asr}
          </span>
        </div>
        <div className="houer">
          <p>صلاة المغرب</p>
          <span lang="en">
            {items.data[today - 1].timings.Maghrib}
          </span>
        </div>
        <div className="houer">
          <p>صلاة العشاء</p>
          <span lang="en">
            {items.data[today - 1].timings.Isha}
          </span>
        </div>
      </div>
    </>
  );
};

export default Watch;
