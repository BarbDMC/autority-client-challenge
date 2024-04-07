import Head from 'next/head'
import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { TasksContainer } from '../features/tasks/TasksContainer'

const IndexPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Authority Challenge</title>
        <meta name="description" content="Task management app" />
      </Head>

      <main className='mx-auto max-w-md'>
       <TasksContainer />
      </main>
    </div>
  )
}

export default IndexPage;
