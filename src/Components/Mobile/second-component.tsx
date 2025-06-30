import '../../App.css'
import chadrackImg from '../../Images/Chadrack.jpg';
import reactJs from '../../Images/react_original_logo_icon_146374.png';
import node from '../../Images/nodejs_original_wordmark_logo_icon_146412.png';
import npm from '../../Images/npm_icon_130871.png';
import tsx from '../../Images/file_type_typescript_official_icon_130107.png';
import js from '../../Images/js.png';
import html from '../../Images/html-5_174854.png';
import css from '../../Images/file_type_css_icon_130661.png';
import mysql from '../../Images/mysqlworkbench_93532.png';
import github from '../../Images/Github_icon-icons.com_66788.png';
import git from '../../Images/file_type_git_icon_130581.png';
import wp from '../../Images/wp_icon-icons.com_62788.png';
import figma from '../../Images/figma_5968705.png';
import vscode from '../../Images/file_type_vscode_icon_130084.png'

function SecondComponent() {
    return (
        <>
            <div className="">
                <img src={chadrackImg} alt="Chadrack" />
            </div>
            <div className='p-[5px] bg-white'>
                <p className=' text-black font-semibold text-[35px] pl-[30px]'>
                    À propos de moi
                </p>
                <p className='text-black p-[30px]'>
                    <span className='font-thin text-[25px] '>
                        Mbote na bino 👋 Je m'appelle Chadrack Mbala.
                        Ma passion pour le numérique remonte à 2014,
                        inspirée par les émissions télé où l’informatique
                        aidait à résoudre des enquêtes. Cette curiosité m’a
                        conduit aux mathématiques-informatique. <br /><br />

                        En troisième année, j’ai découvert le développement
                        web lors de mon travail de fin de cycle : un véritable déclic.
                        Depuis, je trace mon chemin dans cet univers avec détermination. <br /><br />

                        Formé à la Kinshasa Digital Academy, une école numérique
                        de référence, j’ai travaillé sur des projets concrets et
                        professionnalisants. <br /><br />

                        J’aime donner vie aux idées sur le web.
                    </span>
                </p>
            </div>
            <div className='p-[10px] bg-[#F1F1F1]'>
                <p className='text-black font-semibold text-[35px] pl-[30px]'>
                    Mon expertise
                </p>
                <div className='flex justify-center flex-wrap gap-10 mx-auto mt-[15px]'>
                    <div className='w-[70px] h-[70px] bg-white rounded-xl'>
                        <img src={reactJs} alt="react" />
                    </div>
                    <div className='w-[70px] h-[70px] bg-white rounded-xl'>
                        <img src={node} alt="node" />
                    </div>
                    <div className='w-[70px] h-[70px] bg-white rounded-xl'>
                        <img src={npm} alt="npm" />
                    </div>
                    <div className='w-[70px] h-[70px] bg-white rounded-xl'>
                        <img src={js} alt="js" />
                    </div>
                    <div className='w-[70px] h-[70px] bg-white rounded-xl'>
                        <img src={tsx} alt="tsx" />
                    </div>
                    <div className='w-[70px] h-[70px] bg-white rounded-xl'>
                        <img src={html} alt="html" />
                    </div>
                    <div className='w-[70px] h-[70px] bg-white rounded-xl'>
                        <img src={css} alt="css" />
                    </div>
                    <div className='w-[70px] h-[70px] bg-white rounded-xl'>
                        <img src={mysql} alt="mysql" />
                    </div>
                    <div className='w-[70px] h-[70px] bg-white rounded-xl'>
                        <img src={wp} alt="wp" />
                    </div>
                </div>
                <p className=' text-black font-semibold text-[35px] pl-[30px] mt-[15px]'>
                    Mes outils
                </p>
                <div className='flex justify-center flex-wrap gap-10 mx-auto mt-[15px]'>
                    <div className='w-[70px] h-[70px] bg-white rounded-xl'>
                        <img src={vscode} alt="vscode" />
                    </div>
                    <div className='w-[70px] h-[70px] bg-white rounded-xl'>
                        <img src={figma} alt="figma" />
                    </div>
                    <div className='w-[70px] h-[70px] bg-white rounded-xl'>
                        <img src={github} alt="github" />
                    </div>
                    <div className='w-[70px] h-[70px] bg-white rounded-xl'>
                        <img src={git} alt="git" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default SecondComponent;