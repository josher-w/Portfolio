import * as all_projects from './ProjectData';
import './Project.css'
import '../../index'

/* List of projects */
export default function ProjectSection() {
    return (
        <div className='ProjectList Section'>
            <header>Projects</header>

            <ul className="List">
                <Project {...all_projects.sorts_TUI}/>
                <Project {...all_projects.weather_wallpaper}/>
                <Project {...all_projects.origame}/>
                <Project {...all_projects.bogosort}/>
                <Project {...all_projects.portfolio}/>
            </ul>
        </div>
    );
}

/* Singular project */
export function Project({title, link, subtitle, desc}) {
    return (
        <li>
            <div className="Project">
                <header>
                    <a href={link} target="_blank" rel="noopener noreferrer">{title}</a>
                </header>

                <div className='ProjectContent'>
                    <div className="ProjectSubtitle">{subtitle}</div>
                    <div className="ProjectDescription">{desc}</div>
                </div>
            </div>
        </li>
    );
}
