import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        <h2>קצת עלינו</h2>
        <p className="about-text">
          ברוכים הבאים ל-SafeDonate! אנו פלטפורמה ייחודית שמטרתה לספק מידע מקיף
          ואמין על עמותות בישראל, כדי לסייע לכם לקבל החלטות תרומה מושכלות
          ובטוחות. אנו משתמשים בטכנולוגיות מתקדמות ובמנועי חיפוש כדי לאתר מידע
          חשוב על עמותות, כולל המטרות שלהן, ההיסטוריה הפיננסית, והאם היו מעורבות
          בפעילויות פליליות או פירוק.
        </p>
        <p className="about-text">
          האתר שלנו מבוסס על מחקר מעמיק והתחייבות למידע אמין, כך שתוכלו להרגיש
          בטוחים ורגועים בבחירת העמותות לתרום להן.
        </p>
        <p className="about-text">
          אנו מאמינים בשקיפות ובנגישות לכל משתמש, ולכן יצרנו כלי חיפוש מתקדם אשר
          מספק תוצאות מותאמות אישית לפי הקריטריונים החשובים לכם.
        </p>

        <h3>צרו קשר</h3>
        <p className="contact-info">
          במידה ויש לכם שאלות או הצעות, אתם מוזמנים לפנות אלינו בכתובת האימייל:
          <br />
          <strong>contactus@talandomer.com</strong>
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
