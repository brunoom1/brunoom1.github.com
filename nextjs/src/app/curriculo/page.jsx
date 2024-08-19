'use client'

import { useEffect, useState } from 'react'
import { parse } from "yaml";
import { Container, Row, Card, CardBody } from "react-bootstrap";

import Social from '../../components/Contact/Social';

const Curriculo = () => {

  const curriculoYaml = 'https://raw.githubusercontent.com/brunoom1/curriculo/master/curriculo.yaml';
  const [curriculoData, setCurriculoData] = useState(null);

  useEffect(() => {
    fetch(curriculoYaml).then(async result => {
      const curriculo = parse(await result.text());

      console.log(curriculo);

      setCurriculoData(curriculo);
    });
  }, []);

  return (
    <Container style={{padding: '60px'}} className={"curriculo"}>
      { curriculoData && <Row style={{marginTop: 100}} >
        <Card>
          <CardBody style={{textAlign: 'left'}}>
            <section name="header">
              <h1>{ curriculoData.person.name }</h1>
              <h2>{ curriculoData.work.description } </h2>
              <span>
                { curriculoData.person.aboutResume }
              </span>
            </section>

            <section name="contacts">
              <h2> Social </h2>

              <div>
                {curriculoData.contacts.cellphone.map((cellphone, i) => <div key={i}>
                  <strong>Cellphone {i + 1}: </strong> { cellphone.number } 
                </div>)}
              </div>

              <div>
                { curriculoData.contacts.social.map((social, i) => <div key={i}>
                  <strong> { social.name }</strong>: 
                  <a href={ social.link }> {social.value} </a>
                </div>) }
              </div>
            </section>

            <section name="resumo">
              <h2> Resumo Profissional </h2>

              <div>
                { curriculoData.work.profissionalResume }
              </div>

            </section>

            <section name="profissionalExperience">
              <h2> Experiência Profissional</h2>
              
              { curriculoData.work.profissionalExperience.map((experience, i) => <div key={i} style={{marginBottom: 30}}>
                <div>
                  <strong>
                    {experience.yearInit}/{experience.yearFinish} - 
                    {experience.company} - {experience.state}  
                  </strong>
                </div>
                <div>
                  <strong>{ experience.positionHeld }</strong>
                </div>
                <div>
                  <ul>
                  { experience.experienceTopics.map((topic, i) => <li key={i}>{ topic }</li>)}
                  </ul>
                </div>

              </div>)}
            </section>
          </CardBody>
        </Card>
      </Row> }

      <Social />
    </Container>
  )
}

export default Curriculo