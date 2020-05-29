import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import ProgressBar from 'react-bootstrap/ProgressBar'
import axios from 'axios'
import { FormControl, MenuItem, Select } from '@material-ui/core'

import ObjectTypes from '../../constants/ObjectTypes'

import './VideoLoading.css'

const VideoLoading = () => {
  // const {
  //   isLogged,
  // } = props;

  const [selectedFile, setSelectedFile]     = useState();
  const [fileName, setFileName]             = useState('');
  const [progressNumber, setProgressNumber] = useState();
  const [isProgressBarVisible, setIsProgressBarVisible] = useState(false);
  
  const [configuration, setConfiguration]           = useState(ObjectTypes.human);
  const [analyticalDetector, setAnalyticalDetector] = useState(ObjectTypes.human.analyticalDetectors[0]);
  const [aggregateDetector, setAggregateDetector]   = useState(ObjectTypes.human.aggregateDetectors[0]);

  React.useEffect(() => {
    onVideoPageOpen()

    return onVideoPageClose
  }, [])

  // if (!isLogged) {
  //   return (
  //     <Redirect
  //       to={{
  //         pathname: '/sign-in',
  //       }}
  //     />
  //   )
  // }

  const handleChange = (event) => {
    const file = event.target.files[0];

    setFileName(file.name)
    setSelectedFile({ 
      selectedFile: file
    })
  }

  const handleClick = () => {
    const formData = new FormData();
    formData.append('video', selectedFile, selectedFile.name)

    setIsProgressBarVisible(true)

    axios.post('my-domain.com/file-upload', formData, {
      onUploadProgress: progressEvent => {
        const progress = Math.round(progressEvent.loaded / progressEvent.total * 100);
        
        setProgressNumber(progress) 
        console.log('Upload progress: ' + progress + '%')
      }
    })
    .then(res => {
      console.log(res)
      setIsProgressBarVisible(false)
    })


  }

  const handleObjectChange = (event) => {
    const object = event.target.value;

    if (object === ObjectTypes.human.title) {

      setConfiguration(ObjectTypes.human)
      ObjectTypes.human.analyticalDetectors[0] && setAnalyticalDetector(ObjectTypes.human.analyticalDetectors[0])
      ObjectTypes.human.aggregateDetectors[0]  && setAggregateDetector(ObjectTypes.human.aggregateDetectors[0])

    } else if (object === ObjectTypes.car.title) {

      setConfiguration(ObjectTypes.car)
      ObjectTypes.car.analyticalDetectors[0] && setAnalyticalDetector(ObjectTypes.car.analyticalDetectors[0])
      ObjectTypes.car.aggregateDetectors[0]  && setAggregateDetector(ObjectTypes.car.aggregateDetectors[0])
      
    } else if (object === ObjectTypes.subjects.title) {

      setConfiguration(ObjectTypes.subjects)
      ObjectTypes.subjects.analyticalDetectors[0] && setAnalyticalDetector(ObjectTypes.subjects.analyticalDetectors[0])
      ObjectTypes.subjects.aggregateDetectors[0]  && setAggregateDetector(ObjectTypes.subjects.aggregateDetectors[0])
      
    } else if (object === ObjectTypes.fireOrSmoke.title) {

      setConfiguration(ObjectTypes.fireOrSmoke)
      ObjectTypes.fireOrSmoke.analyticalDetectors[0] && setAnalyticalDetector(ObjectTypes.fireOrSmoke.analyticalDetectors[0])
      ObjectTypes.fireOrSmoke.aggregateDetectors && setAggregateDetector(ObjectTypes.fireOrSmoke.aggregateDetectors[0])
      
    }
  }

  const handleAnalyticalDetectorChange = (event) => {

    setAnalyticalDetector(event.target.value)
  }

  const handleAggregateDetectorChange = (event) => {

    setAggregateDetector(event.target.value)
  }

  return (
    <Container className='b-video-loading'>
      <h4 className='b-video-loading__header'>
        Загрузка видео
      </h4>
      <div className='b-video-loading__info'>
        Для получения отчета выберите необходимую конфигурацию 
        распознавания и загрузите видео.
      </div>
      {
        isProgressBarVisible
        &&
          <ProgressBar 
            animated 
            now={progressNumber} 
            className='b-video-loading__progress-bar'
          />
      }
      <form>
        <div className='b-video-loading__configuration'>
          <FormControl variant='outlined'>
            <Select
              id='demo-simple-select-outlined'
              value={configuration.title}
              onChange={handleObjectChange}
            >
              <MenuItem value={ObjectTypes.human.title}>
                {ObjectTypes.human.title}
              </MenuItem>
              <MenuItem value={ObjectTypes.car.title}>
                {ObjectTypes.car.title}
              </MenuItem>
              <MenuItem value={ObjectTypes.subjects.title}>
                {ObjectTypes.subjects.title}
              </MenuItem>
              <MenuItem value={ObjectTypes.fireOrSmoke.title}>
                {ObjectTypes.fireOrSmoke.title}
              </MenuItem>
            </Select>
          </FormControl>
          {
            configuration.analyticalDetectors
            &&
              <FormControl variant='outlined'>
                <Select
                  id='demo-simple-select-outlined'
                  value={analyticalDetector}
                  onChange={handleAnalyticalDetectorChange}
                >
                  {
                    configuration.analyticalDetectors.map((detector, index) => 
                      <MenuItem value={detector} key={index}>
                        {detector}
                      </MenuItem>
                    )
                  }
                </Select>
              </FormControl>
          }
          {
            configuration.aggregateDetectors
            &&
              <FormControl variant='outlined'>
                <Select
                  id='demo-simple-select-outlined'
                  value={aggregateDetector}
                  onChange={handleAggregateDetectorChange}
                >
                  {
                    configuration.aggregateDetectors.map((detector, index) => 
                      <MenuItem value={detector} key={index}>
                        {detector}
                      </MenuItem>
                    )
                  }
                </Select>
              </FormControl>
          }
        </div>
      </form>
      <Form className='b-video-loading__input-form'>
        <Form.File 
          id="custom-file"
          label={(fileName && fileName) || 'Выбрать файл'}
          data-browse='Обзор'
          className='b-video-loading__input'
          onChange={handleChange}
          custom
        />
        <button 
          className='b-button b-button--primary b-video-loading__load-button'
          onClick={handleClick}
          disabled={!selectedFile}
        >
          Загрузить
        </button>
      </Form>
    </Container>
  )
}

export default VideoLoading

export const onVideoPageOpen = () => {
  document.body.classList.add('video-page')
}

export const onVideoPageClose = () => {
  document.body.classList.remove('video-page')
}
