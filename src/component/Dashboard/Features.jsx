import React from 'react'
import ig1 from './../../assests/1.jpg'
import team from './../../assests/team2.jpg'
import team1 from './../../assests/team1.jpg'

const Features = () => {
    return (
        <>
            <div className="grid grid-cols-1 gap-5 m-5 sm:grid-cols-2">
                <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                    <img className="w-16 h-16 md:w-48 md:h-auto  md:rounded-full mx-auto" src={team} alt="" />
                    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                        <blockquote>
                            <p className="text-lg font-medium">
                                “You can't use up creativity. The more you use, the more you have.”
                            </p>
                        </blockquote>
                        <figcaption className="font-medium">
                            <div className="text-sky-500 dark:text-sky-400">
                            Maya Angelou
                            </div>
                            <div className="text-slate-700 dark:text-slate-500">
                             author, poet, civil rights activist                            </div>
                        </figcaption>
                    </div>
                </figure>

                <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                    <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-full mx-auto" src={team1} alt=""/>
                    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                        <blockquote>
                            <p className="text-lg font-medium">
                                “The public is more familiar with bad design than good design. It is, in effect, conditioned to prefer bad design, because that is what it lives with. The new becomes threatening, the old reassuring.”
                            </p>
                        </blockquote>
                        <figcaption className="font-medium">
                            <div className="text-sky-500 dark:text-sky-400">
                                Paul Rand
                            </div>
                            <div className="text-slate-700 dark:text-slate-500">
                            graphic designer
                            </div>
                        </figcaption>
                    </div>
                </figure>
            </div>
        </>
    )
}

export default Features