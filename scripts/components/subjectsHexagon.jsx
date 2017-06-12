import React, { Component } from 'react';

import Geography from './geography';
import Physics from './physics';
import Mathematics from './mathematics';
import Informatics from './informatics';
import Russian from './russian';
import LettersHendecagon from './lettersHendecagon';

import { SUBJECTS_INFO } from '../constants/commonConstants';

const subjectsContainers = {
  geography: <Geography />,
  physics: <Physics />,
  math: <Mathematics />,
  informatics: <Informatics />,
  ru: <Russian />
};

const data = [
  { key: 'pusher' },
  SUBJECTS_INFO.geography,
  SUBJECTS_INFO.informatics,
  { key: 'pusher' },
  SUBJECTS_INFO.math,
  { key: 'pusher' },
  { key: 'pusher' },
  SUBJECTS_INFO.com,
  { key: 'pusher' },
  SUBJECTS_INFO.physics,
  SUBJECTS_INFO.literature,
  { key: 'pusher' },
  SUBJECTS_INFO.ru,
  { key: 'letters' },
  { key: 'pusher' },
  SUBJECTS_INFO.english,
  SUBJECTS_INFO.biology,
  { key: 'pusher' },
  SUBJECTS_INFO.chemistry,
  SUBJECTS_INFO.history,
];

class SubjectsHexagon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subject: null
    };

    this.onSubjectSelect = subject => () => this.setState({ subject });
  }

  render() {
    const { subject } = this.state;

    if (subject) return React.cloneElement(subjectsContainers[subject], { onSubjectsClick: this.onSubjectSelect(null) });

    const lettersSubjects = data.map(({ key, letter, color }) => ({ key, letter, color }));

    return (
      <div className="parallax-layout">
        <div className="parallax-layer layer-back">
          <div className="hexagon geography">
            <li>
              <div style={{ background: 'red' }}>
                <h2>Свернув горы сможешь покорить и ЕГЭ</h2>
              </div>
            </li>
          </div>
        </div>
        <div className="parallax-layer layer-base">
          <ul className="clr subjects">
            {data.map(({ key, color, title }, index) => {
              if (key === 'pusher') return <li key={index} className="pusher" />;
              if (key === 'letters') return <LettersHendecagon key="letters" lettersSubjects={lettersSubjects} />;

              return (
                <li key={key} className={key} onClick={this.onSubjectSelect(key)}>
                  <div style={{ background: color }}>
                    <img src={`../../images/${key}.svg`} alt={key} />
                    <h2>{title}</h2>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default SubjectsHexagon;
