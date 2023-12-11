import styles from './profile.module.css';
import download from "../../../../public/assets/iconsHeader/download.svg";
import Image from "next/image"; 

import TypeScript from "../../../../public/assets/iconsItemTech/languages-databases/TypeScript.svg";
import JavaScript from "../../../../public/assets/iconsItemTech/languages-databases/JavaScript.svg";
import Java from "../../../../public/assets/iconsItemTech/languages-databases/Java.svg";
import PostgreSQL from "../../../../public/assets/iconsItemTech/languages-databases/PostgreSQL.svg";
import MySQL from "../../../../public/assets/iconsItemTech/languages-databases/MySQL.svg"

import Git from "../../../../public/assets/iconsItemTech/other/git.svg";
import Node from "../../../../public/assets/iconsItemTech/other/nodejs.svg";

import Vue from "../../../../public/assets/iconsItemTech/framework/vue.svg";
import React from "../../../../public/assets/iconsItemTech/framework/react.svg";
import Spring from "../../../../public/assets/iconsItemTech/framework/spring.svg"

import Education from "../../../../public/assets/education.svg";


export default function LoginPage() {

  return (
    <div className={`${styles.aboutSection} + ${styles.activeAnimation}`}>
      <section className={`${styles.container} + ${styles.about}`}>
        <div className={styles.mainTitle}>
          <h2>About <span>me</span><span className={styles.bgText}>About me</span></h2>
        </div>

        <div className={styles.aboutContainer}>
          <div className={styles.leftAbout}>
            <h4>Information About me</h4>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Eveniet labore nihil obcaecati consequatur. Debitis error doloremque, 
              vero eos vel nemo eius voluptatem dicta tenetur modi. <br /> <br /> La musica
              delectus dolore fugiat exercitationem a, 
              ipsum quidem quo enim natus accusamus labore dolores nam. Unde.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              Harum non necessitatibus deleniti eum soluta.
            </p>

            <div className={styles.btnCv}>
              <a href="" className={styles.btnMain}>
                <span className={styles.btnText}>Download CV</span>
                <span className={styles.btnIcon}><i className={`${styles.fas} + ${styles.faDownload}`}><Image src={download} alt="download" loading="lazy" /></i></span>
              </a>
            </div>
          </div>

          <div className={styles.rightAbout}>
            <div className={styles.aboutItem}>
              <div className={styles.abtText}>
                <p className={styles.largeText}>3+</p>
                <p className={styles.smallText}>Projects <br /> Completed</p>
              </div>
            </div>
            <div className={styles.aboutItem}>
              <div className={styles.abtText}>
                <p className={styles.largeText}>3+</p>
                <p className={styles.smallText}>Projects <br /> Completed</p>
              </div>
            </div>
            <div className={styles.aboutItem}>
              <div className={styles.abtText}>
                <p className={styles.largeText}>3+</p>
                <p className={styles.smallText}>Projects <br /> Completed</p>
              </div>
            </div>
            <div className={styles.aboutItem}>
              <div className={styles.abtText}>
                <p className={styles.largeText}>3+</p>
                <p className={styles.smallText}>Projects <br /> Completed</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.container} + ${styles.about}`}>
        <div className={styles.mainTitle}>
          <h2>About <span>me</span><span className={styles.bgText}>About me</span></h2>
        </div>

        <div className={styles.SkillsContainer}>
          <div className={styles.SkillItem}>
            <h4>Languages and DataBase</h4>
            <div className={styles.ItemsTech}>
              <div className={styles.ItemTech}>
                <Image src={TypeScript} alt="download" loading="lazy" />
                <p>TypeScript</p>
              </div>
              <div className={styles.ItemTech}>
                <Image src={JavaScript} alt="download" loading="lazy" />
                <p>JavaScript</p>
              </div> <div className={styles.ItemTech}>
                <Image src={Java} alt="download" loading="lazy" />
                <p>Java</p>
              </div>
              <div className={styles.ItemTech}>
                <Image src={PostgreSQL} alt="download" loading="lazy" />
                <p>PostgreSQK</p>
              </div>
              <div className={styles.ItemTech}>
                <Image src={MySQL} alt="download" loading="lazy" />
                <p>MySQL</p>
              </div>
              <div className={styles.ItemTech}>
                <Image src={TypeScript} alt="download" loading="lazy" />
                <p>TypeScript</p>
              </div>
            </div>
          </div>
          <div className={styles.SkillItem}>
            <h4>Frameworks</h4>
            <div className={styles.ItemsTech}>
              <div className={styles.ItemTech}>
                <Image src={Vue} alt="download" loading="lazy" />
                <p>Vue</p>
              </div>
              <div className={styles.ItemTech}>
                <Image src={React} alt="download" loading="lazy" />
                <p>React</p>
              </div> 
              <div className={styles.ItemTech}>
                <Image src={Spring} alt="download" loading="lazy" />
                <p>Spring Boot</p>
              </div>
            </div>
          </div>
          <div className={styles.SkillItem}>
            <h4>Other</h4>
            <div className={styles.ItemsTech}>
              <div className={styles.ItemTech}>
                <Image src={Git} alt="download" loading="lazy" />
                <p>Git</p>
              </div>
              <div className={styles.ItemTech}>
                <Image src={Node} alt="download" loading="lazy" />
                <p>Node.JS</p>
              </div> 
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.container} + ${styles.about}`}>
        <div className={styles.mainTitle}>
          <h2>Educati<span>on</span><span className={styles.bgText}>Education</span></h2>
        </div>

        <div className={styles.timeline}>
          <div className={styles.timelineItem}>
            <div className={styles.tlIcon}>
              <Image src={Education} alt=''></Image>
            </div>
            <p className={styles.tlDuration}>2010 - 2011</p>
            <h5>Ciencia da computacao<span> - Descomplica</span></h5>
            <p> 
              Matérias relevantes estudas:
            </p>
            <ul className={styles.timelineList}>
                <li>Estruturas de dados e algoritmos</li>
                <li>Sistemas de Gerenciamento de Banco de Dados</li>
                <li>Desenvolvimento web e mobileDesenvolvimento web e mobile</li>
            </ul>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.tlIcon}>
              <Image src={Education} alt=''></Image>
            </div>
            <p className={styles.tlDuration}>2010 - 2011</p>
            <h5>Ciencia Contabeis<span> - UFPB</span></h5>
            <p> 
              Matérias relevantes estudas:
            </p>
            <ul className={styles.timelineList}>
                <li>Matemática Financeira</li>
                <li>Direito Empresarial</li>
                <li>Tecnologia da Informação</li>
            </ul>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.tlIcon}>
              <Image src={Education} alt=''></Image>
            </div>
            <p className={styles.tlDuration}>2010 - 2011</p>
            <h5>Trabalho Voluntario<span> - Skill Labs</span></h5>
            <p> 
              Desenvolvedor Front-Ed
            </p>
            <ul className={styles.timelineList}>
                <li>Análise de Requisitos</li>
                <li>Fluxograma</li>
            </ul>
          </div>
        </div>
      </section>
      
    </div>
  );
}