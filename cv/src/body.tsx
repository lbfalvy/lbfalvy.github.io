import React from "react";
import i18n from "./i18n";
import './body.scss';
import Anchor from "./Anchor";

const search = new URLSearchParams(window.location.search)
const country = search.get('country')
const uk = country == 'uk'

document.title = `${i18n('name')} CV`

export default () => <>
    <header className="header">
        <h1>{i18n('name')}</h1>
        <address>lbfalvy@protonmail.com</address>
        <address>{uk ? '(+44) 7444 416 038' : '(+36) 30 348 8850'}</address>
        <address><Anchor to='lbfalvy.github.io'/></address>
    </header>
    <section className='personal'>
        <dl>
            <dt>{i18n('dob')}</dt><dd>2001-04-19</dd>
            <dt>{i18n('nat')}</dt><dd>{i18n('hun')}</dd>
            <dt>{i18n('addr')}</dt>
            <dd>
                1027 Bp. Margit körút 12, Hungary
            </dd>
        </dl>
    </section>
    <section className='experience'>
        <h2>{i18n('experience')}</h2>
        <Experience from='2017-07-01' to='2017-08-01' role='intern' employer='N-Ware'>
            {i18n('nware_duties')}
        </Experience>
        <Experience from='2018-10-15' to='2019-03-20' role='Web developer' employer='Remiz KFT'>
            <p>{i18n('remiz_duties')}</p>
            <ul className='tags'>
                <li>C#</li>
                <li>ASP.NET Core MVC</li>
                <li>Entity Framework</li>
            </ul>
        </Experience>
        <Experience from='2020-02-01' to='2020-09-17' role='Web developer'
            project='Árnyékegyetem' employer='ELTE (freelance)'
        >
            <p>{i18n('aegyetem_duties')}</p>
            <ul className='tags'>
                <li>Docker</li>
                <li>Node.js</li>
                <li>Typescript</li>
                <li>React.js</li>
            </ul>
        </Experience>
    </section>
    <section className='education'>
        <h2>{i18n('education')}</h2>
        <Education from='2013-09-01' to='2019-05-14' location='Budapest, Hungary'
            award={i18n('matura')} institute={i18n('fazekas')} website='fazekas.hu'
        >
            <p>{i18n('fazekas_skills')}</p>
            <table className='results'>
                <tbody>
                    <tr><td>87%</td><td>{i18n('avg')}</td></tr>
                    <tr><td>94%</td><td>{i18n('adv_math')}</td></tr>
                    <tr><td>90%</td><td>{i18n('adv_it')}</td></tr>
                </tbody>
            </table>
        </Education>
        <Education from='2020-09-20' location='Guildford, UK'
            award='BSc (Computer Science)' institute='University of Surrey' website='surrey.ac.uk'
        >
            <p>{i18n('surrey_skills')}</p>
        </Education>
    </section>
    <section className='languages'>
        <h2>{i18n('languages')}</h2>
        <dl>
            <div><dt>{i18n('hungarian')}</dt><dd>{i18n('native_tongue')}</dd></div>
            <div><dt>{i18n('english')}</dt><dd>C1 / IELTS 8.0 (2019-12)</dd></div>
        </dl>
    </section>
    <section className='skills'>
        <h2>{i18n('skills')}</h2>
        <ul className='tags'>
            <li>Git</li>
            <li>Python</li>
            <li>SQL</li>
            <li>Ruby</li>
            <li>OOP</li>
        </ul>
        <dl className="tags">
            <dt>Linux</dt><dd>{i18n('linux_exp')}</dd>
        </dl>
    </section>
    <section className='foss'>
        <h2>{i18n('foss')}</h2>
        <dl>
            <div><dt>Github</dt><dd><Anchor to='github.com/lbfalvy' /></dd></div>
            <div><dt>NPM</dt><dd><Anchor to='www.npmjs.com/~lbfalvy' /></dd></div>
        </dl>
    </section>
    <section className="this-cv">
        <h2>{i18n('this_cv')}</h2>
        <p>
            {i18n('this_cv_1')}
            <Anchor to={`lbfalvy.github.io/cv/index.html${location.search}`} />
            {i18n('this_cv_2')}
            <Anchor to='github.com/lbfalvy/lbfalvy.github.io' />
            {i18n('this_cv_3')}     
        </p>
    </section>
</>

interface EducationProps {
    from: string, to?: string, location?: string
    award: string
    institute: string, website: string
    children: React.ReactNode
}

function Education({
    from, to, location,
    award,
    institute, website,
    children
}: EducationProps) {
    to ??= i18n('current')
    return <article>
        <header>
            <section className='details'>
                {from} - {to}
                {location ? <span className="location"> - {location}</span> : null}
            </section>
            <section className='award'>{award}</section>
            <section className='institute'>
                {institute} - <Anchor to={website} />
            </section>
        </header>
        <section className='description'>
            {children}
        </section>
    </article>
}

interface ExperienceProps {
    from: string, to?: string
    project?: string
    role: string
    employer?: string
    children: React.ReactNode
}

function Experience({
    from, to,
    project,
    role,
    employer,
    children
}: ExperienceProps) {
    to ??= i18n('current')
    return <article>
        <header>
            <section className='details'>{from} - {to}</section>
            {project ? <div className='project'>{project}</div> : null}
            <div className='role'>{role}</div>
            {employer ? <div className='employer'>{employer}</div> : null}
        </header>
        <section className='description'>{children}</section>
    </article>
}