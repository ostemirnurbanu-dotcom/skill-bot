'use client'
import { useGate, useUnit } from 'effector-react'
import { $reputations, ReputationGate } from "@/context/reputation"
import { getReputationsFx } from '@/api/reputation'
import Image from 'next/image'
import ReputationSkeleton from '../modules/ReputationSkeleton'
import styles from "@/styles/reputation.module.scss"

const ReputationPage = () => {
	useGate(ReputationGate)
	const reputations = useUnit($reputations)
	const spinner = useUnit(getReputationsFx.pending)
	return (
		<>
			<header>
				<div className="container">
					<nav className="navbar navbar-dark">
						<div className="d-flex align-items-center">
							<Image className="rounded-circle" src='/img/logo.png' alt='' style={{ marginRight: 15 }} width={50} height={50} />
							<a className="navbar-brand">Репутация участников</a>
						</div>
					</nav>
				</div>
			</header>
			<main>
				<section>
					<div className="container">
						<div className={styles.reputations_table}>
							<table className='table table-striped table-dark mt-2 table-bordered'>
								<thead>
									<tr>
										<th>Место</th>
										<th>Участник</th>
										<th>Репутация</th>
									</tr>
								</thead>
								<tbody>
									{spinner ? (
    <ReputationSkeleton />
) : (
    reputations.map(({ reputation, fullName, userAvatar }, i) => (
        <tr key={i}>
            <th>{i + 1}</th>
            <td className={styles.full_name}>
                <div className={styles.full_name__inner}>
                    <Image
                        className="rounded-circle"
                        src={userAvatar || '/img/avatar.png'}
                        alt=""
                        style={{ marginRight: 15 }}
                        width={35}
                        height={35}
                    />
                    <span>{fullName}</span>
                </div>
            </td>
            <td>{reputation}</td>
        </tr>
    ))
)}
								</tbody>
							</table>
						</div>
					</div>
				</section>
			</main>
		</>
	)
}

export default ReputationPage;