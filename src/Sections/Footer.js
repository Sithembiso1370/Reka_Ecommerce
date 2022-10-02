import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='Footer'>
      <div className='footer_left'>
        <h3>Akilli Kraal - Get to Know Us</h3>
        <div>
          <span>
            <a href="/">
            About 
            </a>
          </span>
          <span>
            <a href="/">
            Email: enquiries@akillikraal.com
            </a>
          </span>
          <span>
            <a href="/">
            WhatsApp: 060 070 2552
            </a>
            <a href="/">
            Phone: 012 943 0123
            </a>
          </span>
          <span>
            <a href="/">
            Site Map
            </a>
          </span>
          <span>
            <a href="/">
            © 2022 AkilliKraal (Pty) Ltd, All Rights Reserved
            </a>
          </span>
        </div>
      </div>
      <div className='footer_center'>
        <h3>Akilli - Account</h3>
        <div>
        <span>
            <a href="/">
              Account
            </a>
          </span>
          <span>
            <a href="/">
              Dropshipping
            </a>
          </span>
          <span>
            <a href="/">
            Careers
            </a>
          </span>
          <span>
            <a href="/">
            Instant Salesman/women
            </a>
          </span>
        </div>
      </div>
      <div className='footer_right'>
        <h3>Support</h3>
        <div>
          <span>
            <a href="/">
            FAQ
            </a>
          </span>
          <span>
            <a href="/">
            Orders and Shipping
            </a>
          </span>
          <span>
            <a href="/">
            Returns
            </a>
          </span>
        </div>
      </div>
      <div className='footer_right'>
        <h3>Akilli Admin</h3>
        <div>
          <span
              style={{
                backgroundImage: `url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAV8AAACQCAMAAACYophmAAABQVBMVEX29vYPHYj29vcOK5MXI3cTJoIbH2gYIW4WInQUJX0PHYcQKY35+fn4+Pb7/P8ZH2kAAHoOKpUAFoYAAHgAAH8IGYfj5/j19/8RKIgAAHMUJnxRWZTz9f8LG3tCS5EAD4TIydxlcaIAAFUAAGEAAGwAAFrCy+E6QoQACYHq7f/s7vrV2e0AFn/n6PbN0ecADnYAF3kvOIeGjLyMkbykqcxgZ6R4frQAAF0AF3OxttY+RpAkLoZUXJ6mq86+wt00PYuvtdydo89/hbhrcaoADG8AAE0dImEADWYADWCXosXa3/pGTo2Jj7lfZJF1eqVPV562uNDFy+2Plsw0PpJmbaxFUaUiLXyfp+S5wOtIT4czPITT1+UAACQAADwAAER3ep9wcJU0OW+mqMAuNXMgKGtOUXySk7IxN3FbYIsTMZA+RHd4aPnnAAAdN0lEQVR4nO1dC1saSdaGjqyKVQU2dDcISEyMQnP1EgMqKOqM10Sd7Lqr2W8zk2Sz2fn/P+CrqlO3bjCJZgYvy3meyWDfquutU+de1ZHIiEY0ohGNaEQjGtGIRjSiEY1oRCMa0YhG9EeQddcvcO/oG4jcEDBrwK/QMyx94H9hNP4MfPG1J63bPHTwQx4AWRHre971Bv0R+CJEIf7Ks63IbYFSt1wzhg+DjGl+MwxYrzEilXqehEUEpqhz3Okvwgjd5sUsfj9tgpB7z8aYYTGID6yIwR837Qb22rFsKrvjK/zoExDxam69263XLPpgrzObia1VbgMwJZKvud3V5ePuLe8fDgEPlCu1gRxqEUk35hLSyzrRqJPc9MQQWRFMKr3NQipJqeDiiLeWsh2nFKvfAiArgtqzG8lkupS9ze3DIot4R93e3PFF9oQMOl+7XAR67d3suRFcaVB4KaV6sv8ov9JMF/lRZ8PFZDXFLyiu+zcXohTf3TR7lBNz7zG+5M18Npku2k7xtB9fK0JWkjanVBvdUEKg5XScw2evCwZG7mySIRIX+PpXdhRGoH0bhMgsv93e8u6xikMraeijExvwmrg86XA87NMbd4K8LMb5vQxK/rD8cSkqiR2sCHijpcFz5+uE/SU+E+zNW9w8NMJdPkfjcac6QM2QXpKfjWaZDrkZwhRfAeVFDQ6swMMY5I4do/iyv53b4osqBY5vce1e41ueF0yU7FPDFi5DF27FI1Q+wIOLcDN2mw6IhlJ1Y6OQrWA35oimO7fBdyElbr7H4peaSOtilpaW+96TSOHRj/23ieu3OEhXxvmkl+ZTwWn+UndrlbqHyRyXF3H7VhoKdZK3frchEtkR07j4MsxE2N0ABivu3kaFUPusSAVBFuYv9nJFDndym1C8EWIzvMGMCTu7epsZjnZAmqduaz4Ph9A2sAHVw2ErSbKv07idhUm6x5OxRTH3cW2DszMVNaoZdHRcTCaX2mF4r/MVA4fJLmcMJ0kCvvKPBzb+WMKVlFBDzRAj4FpMsm8fAH1/DuiQZSHPrXhEtgPjmO4ZrSCv/rTuD3RdvoUQ9kGwOW+DL0dd73vlMeMamDnURjgP8q8wHqLO/NF3S4dwx5ACE3WTfbauZVG3HPc/3PqWqcKiGEw70vlQ/CsxLraI2+3s5Cr3iIOVHVVaET0Xr1ZuOtxBKO0MEI/9r69juZY1YIKTw+Tgwfp+IIyn0hE4ysJ8+Gy8Hfa3qLeU3qjdH3iphyGsfiYGjB6AuUr1faHCEbE41zB+GxwLksTCYyIyZF5GQB05hYCUHwADawKxf8InxCMxcDzeFuaZKb1xjRmU9gBX9O5ITlyq4PJGn5TxkF6Wb4sxKZ+3O532uU/M7usAkMVikuXumUd5zYgLsQASOQVvdh2O6tsC0pLenpdN9I8iRKKOjjz6P8zMPTq/kqbWQFzI9+uLuyRu93PKlo1YpPC2RPiEQUDc3ux8Kk0pNZ/bzmvJuro4S+mKeWnI316fTy3S/pGTdXZ0NlfD6OkW/QHBCCfDDq8fogg5u+IXLFZUq3T8eqfzWWhi02gCzqL8+fL6PKPW5vI5Mx/oM6s1YxhQm710cuVeWWxkS+CbMhQcRB7Yy/aAGZC/EkvKgEG0mD0GvqF3oN00jwC5CJPuesqO2kt0oMhsiR0tXuUxtfPoL1CiUYcdTVNfhuzw24oNhS/yexu0CfE2dnazYvIh8tqz2RKcduxStgrjFbAqCZd1yTPUJ3juUB6TNaHg0qty3C1tPDR9uKi+noRQj0T44khc7W3aLKiQqiHqUTAYHYqv5V840mshc6IBdTvzFYXAcJZq8j2OeBP6qmKsrpMfqLyZUsNrvMZLzzA2oCvJ+xUQRh0ZKNByS0UeRGiAbKcEAzqO6GHxQoTFaiCoUzVvLQWxXYovroDUKS0T6rnZBigsqMbx3ZDhL8CHtBsCP0eibBe448y96/NYKQQtjBQ1brRdQZhN7GTLzIABo1xLvDvjaCQ9DPuKRISpIF034dRReDnzOqXs0lKjxGNg0fSOiNuAoZQqLwtFyfBFC/CAdAdJC5vfFZf8i10R/hKDSroQjpdN8CtLMjaGzgt2H7b8+aZvjT0mNJyYAbnMY9+dfLCwJ3jVKQgFZ+HyhTAeGPtaqF4FXssuH/n+0U4Kegr6EJ8DvvYvMvzI8RWTItlF1HNLp0tCqjpMeaWTOwjVQWgIqxsdNVUTtfLRspROIOWROyN4205n5+ezyZKUVckFQxbAUFPzjGdRBavcPXkvZQitLhSDYt9FHtgpX9h8ul4csbmMSa/EOTHd438KSR0HfR61S+mLMpZhowZ1J2onKysrGeDOtyuMTroInSXBvuKRZVze4kLcnqkTZuASGRwD9L1NEA5Ocr1z5B8ddXfo+MfZUFYrpvnATU0qkqjf6Pm+J71HnrAmmtH532hIQtoSWteYbCrykOXOLNlJ8rhtoY4gLe6xzEw8Xsyxy9GyzkrQzhU3V9os9gheodPyIAvvx2QwXKTkqVvDGbBBH6oG1Gmci15zSUrx5slRhjYXSdmVPDg4pMxfIepclI2u8JBlPLlKSH15c2trc1kYIH6lvr2ytiMziDjf2aZ0Nhwr2dIeBu09l1TSeLBnWe/QUZY7yumefCEI5VI7jDkkAkmInDeWKx6hnCGjL/assO6EhEn2oPCBh794JqPAzWY3K05LF5IcAuAXNWxhfwkmWKonYw2YLMLzj03vBHzEZNd9mS0Vqe2XbPJXRt1sKlUqxakq4bej7flkKjm/MiwvhKoaIdyOIc7rC4GcOue8NccCt3H7SgWBMQyIE2OTkwhRTW9v7PiiWATXQBdJ7SWHUAfDPWmecVdujc8BmyWSAS9Uhxsa1Eghq/C7tKtCOdidCWhHILLJhtr+e7YopX2WAYwqfHBTQpRgj42NfWF6q38q4TxkYmUmUrpuNrUtqa4TaZx0TzmsuM4sDkjZ4bxMMBWXzlVnwVGNq2gkkjNCebPCqODJI4tag0yaJnsGgGDUZCtUvPBL49ST1J5eHd44HWBCcWHRMDQarEGPm4IiUmEJJ683PCNZOQDcmWcGbZyrHq7u0CroumxZBQzIuShcoBfIOFa0uGVkeUgb8E1uM0joQ8CHcaq+uABVGsCTLLoBPaZnj3QTZYUvqsNPburK27vC/GsHzAeZ0LPTyXRRP59s2rQ76UMYC5ZIAR9zWITawsPg5pgMnIl4mifilwWIJ3DagsuZ8hbYUElbNroqVWZWRCPZzI2bwXAqE+PQItIh0rhuYXbdkfgSUKA8iyLxFRog4NJTmcLHLO6UZnvt9qYQOXmpT4p/JdAyGy7qNw3PdJOzjY82Ls8I6cvnMvZl+MfWJOxlJn+FIooWF8wCFOFzO03gEuxvKW9ZYNEzzDMqK+LhJoTEovKXWitceZp1JOQNjMh8OWCecUa3C5081bH5TRuEChLS34bB5YNJHzZMyzgvgjn2qaeMhxKoDjk7o/E+94kaR1jKFmfSVU4SNeJEVppyD+ArnLWSEpcyO5ll3aeyIi7a0P9CE1QjyESFocowi3nwVgMRoF9KzGTbqHMpDhrSoQKYukusD07BV/1JddAw8SU5YAenmsdl6I6sN1G2p9NHxWMqQMgxIHllppixl+U3SX7FdRDSqtABC6njZOgAoG2ZAgxR1CnO5s06B4kJ9lWy1OwFz3iW6tKIf+uIbmCPTx+mLoB9h11Txc17XqtQkWUKXDFYliXnf7zQR403JAK2KXUEcgFOcqVKEuaaSFKryBbOi+ImOmGUcREd2IT0D806B1xLaXmmjnKm5lYGHwefWUUOD3+KuBpVhuioQWVR8lYFb7cn1BYclGyLyIPTdCHZzV6NF5EduX3ksypJMfPNJB1W5q40z7i6YzFMeYUPVl3xDdEeoN3fguurs2adg7SO0z1z0nCTz76Sdi3DNw7ZLcJtoNIvCJC2Z/N/MqAhwmVhZJVWRMUZGJaWLjNY8nE/WRZaEIZuoEpJ2nSpLsxp+ZANGQyHoFAcBLIw3qKF/IAmVHg6Jc0/C/Di0800H7DLxkxNJIib0vdm5iEbjzhLNfOwafLGxaA/SDgvzCHnb28hEClDaRoad6DEgjgZnXFdfdrSyUwwQZS621QhACkwWE8lvqmBZcDiBaIpI2pOTqR2NM0HPmZqIuEKd+Y2eTCNJxMp27IXi4PbP9TIGmUSobUdrsySOtZAu8cOZSvhzoP6Ww4auuImrt7jjkiU4zzEdrk0gHuF/ZpmA3B9pROPLs1BYC6p4zFIjJezYZpnIKhVEgZcHKiqA3uD2jg8bZAdsvRllTb03QyzyF4SrERZ8bNAomcktajcxd47JsSk6zcfCJYQMGhlolz4ePHkoTlqUaGMVIVAKRRxQeSdp/lX1qHS2e6ewiH71IwhgKBWahDuE3/ChEpVmB4vbg6/IBvXU46GN5rUWQHSlpkMUydg4q5d1LCOk63LGzi/CkdVmqy4HTYBZPhrlgJkce0aBxkfaGK5RZFAIpLsxCDhh0l9Heouw9EdXtAtJpKFXBbkcWJ5zGKq4KFm/87GPXU+ZPZl5C7ZGl5nSWOpskfJNVH0wMLf5ZXJ9BLDt1YIMJe4BxxVbT4IdZesYJGvyY/BALxmt0kbJFpa82QTiJR7k+mMab3Z60cEsaZlni5UUusx88FpAXNiCMnJ4g1cZ5mj+BSzyW9eiv/DZInQnmRfU0CJQCI9unmeZ5GXvLu9O19yOLdJ9NMr5jtLc48lyhmJ8CPTkQJfiBiCkS3jikzGnsom/rGbTTsOxddSDmTUzu72Vl5m02qmpbaNWjYI5NmzPKeCwAulVqYwwPMXjhCAyTtgXyuQhVALUjgRMblZ0cPs7tra7mwzxTQOn9s8usOA2Q7gKwSqdCekjzcrn6vCX+DPKfM7aqfWWROnBdYE9e48JoK2bKkbiqVS0ZBjgbpZ8BHtU5eNT32XyztDTcsqu/4y56GQymFEwxXhOH9clDEBu0jJhjVAHF/h3cW1+WCau1mIRmJvyRTHli4JoC3xFbKUgaV21U0w+47ZczIcrcme4lebK7PYcjiexapm1k9Pt6r8ldMv1aIyVYqfupviCORWJWMUcx62TL3sboCECMR3nORLTxn/TsE18FXRlw0h/CogpPUyFpH9dJpHcuXWRnFQE+scnzxvXyb3qa19+g+OuFEwR+WONPkcEeCLO+lNvXRUThHGvneynIu8lVojxdnXqMdAR0vpMAclN3o+YzzwS+zACkFZcSKjL7gO3jELhovs2mvAdywvOosq6+kQvk5ysufzy1G9YMfVWSe75oNIDkd3zDwrEzVrvnbTuIfK8s13VdtDX89xHLZcdZOEnRvkrs2nbZnTcorp7FLP5ZqfJIu8niwg1LCbhaPLkHCgxhH7u6h8PCpSeXFaaVa7DOUd2QSrEbJZE2Vw0Slrns+Ic46dnNkmVOXx5weMFnLSzLJ2WODNpq+4fu7xAJVoEgJKd1daSdpjS0tLFxcXE0f9zjkmRyvHsXSSlYZUN3IrdVk86l/mGB0fBiR2XRw9A4DIh2P+d04KEVx7DRcYtdHQRImXn1Qvcivnqj7V4sWFV1XWeOG4k0cYVS7h+bpejvXAq3fWclcXG4WNJfmKuh9cJzjZypAjD5q8sqDQCMNbYuK59W6n031aKRNd/auqfAO3yIMyR9BX6Gv1HWENEQJN1CuuuWkB91hIvtLttOsVD7HooxVqlStJXnxM8mW34vryfkvJBxYxFux7J/haERWxGtg+hoX2KFxY3lc3Z66GCP39tTIwsaFDqAnzFztlth1WU8K0xnjAkg5M7WEqd8DMufuaqW8VG1rXndCHrt+Pw9KnBy1kwcELB9M1JoDgY9GEOEaHhXgdphF5ReLdoxsm6zq0rEBH9GGlVALP0A9R0iV4pxW6fPCbfHuFW+Cx2D9p1zsvWWbO3hpiTn4QqXVs168Okn+ZeF3L3Ncfuf4Frj/y1U2CzGLJAD9gt0kVI8vBOFnwjO8fAz9kUlssOKnt+7Ts5bGQXEhSivUtwx3RH0DY3WPLkbJr7r3UbQ+fvO4Hajh7t9oFbETfJIuv+B6B209Gjv4H6MGKBDSQBmMRvKb/UN8NmPKc58saE14S/x1vMeiCh4qv/3QgQQG74d/xeHvgkncW9bXz9McC0NOFd1bg8ggi+frhWu5qbI/RzFVuZ7Xuh+Y4XOhV6guK3gWcmIdN6Oyf//evnxg9M+ng43sfBbpoWRi7iVfPFb14z0p2us/0kefvA5YTIpWdq1azUMjEMkDxZrNwtVa3cMB3tiKkfRqL21VR0Jqee0QGmEX8s19/fpb4S4gSL36r4VB4gHx4PjHOaILRQYVtv9PZG2M0MzMzNtkwLVPkdXPzzUxMkcA4U10MwseqhJLTT4DY/6dnh7aiYihESO3s138dhAF+9j4c4PS+TGh8W1+YHUpOWmOSJveeGoXT7tx8YTJmkOTiAo+mm3mrTmlq6omm6am+EqOHSxB6RMT9HGbixM8+DkQNUOUA4OX4PocldV8MfCcULph0L5qxySC+kn8PQ6vi/a0nAXyf2Pd7p66bkIqQYeJ9+P1ZkIHrwdpw8nmf4ssgnqAIf8zzJaAfJzW+n9S8JqvzDNKB+Da6QXxRpzoVxNc5IY+HgRVh5H/4aAJ88CHARtj7KNiX8e/+Z15v5yYUvGOtS5VW7rQ474bkA0DMCv3NuLO3GQ/hG71X+5b8gUQqP5v4vg/gi56+Gtf4JniNJKrva3ybb0RZBKpTeCnAg+VDM1DWxNacT4XwnX4bkEyPhzD5omRw4i+J34O1lG8ONL6t17D25GxP47snK0rzVzEGb8zg4Yyy0TLrsjhFPHYt2odv8T7vBPwjRD4bZkTiJ20nWRFc+zSu8d0X5aKfWwa+Qi2Rw71Jk38LzSZzL5rVJjcfgpMfl5tPwvg+sYdd2DssQk8NFUcVXGDLoX0D348eLCB/rfGdeQ5pe8tfjBn4FhqLJ9vnlDorL8ca1Uz1cyC+SA7tqT58qYJ7sP7wVwn7vxkC+JWp4LwvBxrffSiwxv6lZt/JcWB31Ab2BXwLi11CxG5rhNRPlrJtUz7g/Ox0P77T92rjsz+SyK+GgDgwPAxcSYxrfA9AQGL3k4HvJRThkTetyRmF75UhSi1WcHz4zrT6UJdrtxC+T6bu81bhP0LowwtDQPxb44sOtXgYP3hDoMyh8nxCm2dvCKzREOKB49vskFAaWJWiQLnJXHwQvs792jnqjyNc+cnA96Pa8w17v00Y4uEpBNfQ2b6BL9RWYX9iUuPb+PqmvqjSnJL4Tr018H2sCi5Cfja85IN3spuo/kKhOz5xKQwL5tEpfPehqhKXnxv4Ng+JkW0PEA94nkQVvoV/RLWHca/3Yv8RIu8NAfxKLaUi7/cVvOP7ctUMFbUGvmIjwAC+sbEjck0dEKsz82JTEt/oZjnzP6DgUNuw0JSCw770jVkEIuHKDVqOxxS+k1cgTHB538S3MNG9JmnGVwPZCl+77Z1OK3yvWQX54MlCriGAx7/IL4qcGdqt9UaUjuP8/oTCt3UpFvwE9BulJs+oDyIMoQfA97818kYLiMep4Jj4zP9bC+DEJ1HOTs228QTEzsYnXoi4moWo+aDxZVkHvuvPXCuAb6x5ccg/vtXnMaB6QcI7FV8jaNXW+PaGuq/DEMkUwIkX78S2ewklHah2U6uHzvYMfFdE2BF194L4xmKNmVWf8JCNWSlokTXFvlPVBYTqBv8+WgWHus8gvMPxPePaiWjjd2JiX66wt+hhje/emSi6w/lcK4QvRfiq44Uqzi3szih4n6z7GLsbWgA/shyRJlTTMcrEAS/8t8il4bt9UkYxMx80/9a1LTc/KVWcDk42cpUQS5JeVeHLIg4RcqzxLdziU1wPg4gpgC8JTwy90PgaTjO5HFP4To7XVGmpCKCF4r+FRs8LcDC5eKLwZdtbWmTHUfjad7G4eChkxigTCb5t5IkZ2tGaPf/JwPfKXOKyvKfivyYL7+QNgFG3oeCdnuXbu3ZsjW/vsfKvEaNMJF4xBZf/jyEeVBKIsjVLZEjx8NrMmXkr87HYZBBfCnB1TsdtMHlpaDe+gBzXbZWndx5rjojqJ8G/VEwkqAdnBYzf52otFR2IfQNftaYT1lgNzh83TozR0cbZFOyYiL0C4Dv9ZHr64rHiG9FJogRXcNT4VbHJiU++3ttw1cB3rx0MiSN3bi8WC+ObaahtlMmJZt/4LtjOhHtw/L/p+NGw934ZFmkBnEiMfyG49vO4wnffWEnIzQeFb9Dhslj9znGjEMa3II1n7C9p9q2KcBladhS+j6gIIkTo3TON728+Wn2l8GVFUeo6kjPwnfcDz7CoeYu89nGzEMQ30+yK0GanOpWRxu+SuBlvG/gObVvfYRP2/5OQ+CYS78i/JxIS39YXT89Zf3FM4Tt5NcAfwCjfXmwG8a0KCUxmNfvG5XI2XKlK/fYkejf7OwyDVJKIwvuiW3k2rvB9pbVbBLvjGt/WwM/+Ykz8lfkAvoVcHjaV1MbZlF2Xy2z9LWFATE9P933G7tEQkUmiBFNwn/cTEt+JTwaXooXnExrfa75sakXIwlLBrC9Z4nsVkF2t3aamDiX1ZA6D4ht/RFV+QULv/qLlw+7v44p/mXZTnQbzQeC7d/2nIUm9ZeLLTTEWeshofPluCXxX0GmNb7Hd/3Wcx0E4/3tC4iv+BXxfiC+cgYl70tL4ztev3y+ALDdNfGt8j5Kqie9UOL/J8HWWH68AFjFKji9jYjAgDgJC1ntt4DvhXr+gHa1WdfVvhopVC/vrU9/Ed/rlzb7k/oAInb1Q+Gp4x/dNkxTnP45pfBflPoFy39qIXkqMes2QfkPtxnfg+99Hq+Cw+1MiwL8c34nffINBcfmVxpcXs0cY4x/mw9/Tw95ixsCXFVmSXOE78C3e7w/2/giR3wfga/puzMLi5oPA9z0oPnLVaJ1UPNgXBTbaIOW5pmn/ttmnChqZ78DXuc3XwB8GCRdZ4ivEb6BqFLX3Nb7SfGC1Ja1W7rDuSovW7UgPI8NrVNnH0MhJ9XvwfbxFECxJlAjgm2DajecypIhgtSUaX5DMqNKanJyZbDWbS5ev35x8PnlzeaFjEAzeKss9u0sU3CC8g/Cd/ht5LKvgwoRrPyfC8uHV04A4JGA+AL5iZQtPbc5AcV+h0KRkBngYB+8dUfbtVDMaX/4xubjeL21a4xsvD367h0/Y+xLGd+L3QIQBk/+MaXyFX4cOFb6D8heZTGOFsH0a6S/FuLtzQVqfVvg6C49WwSEugKV7wfANajdWmjqh8JUrW3jpg8R3wPqLKjfO6g2OL4d4ejZPgnToKHzt1cfpwVk8SZQI8O/Ep2DFEqofGPiKih6S+yq+1Rzb6JDsFjS+1XAUEi0UFb7Rvz5aBWf5H4P4mrXWTOkQVlsi8d0T2/7VPk5+Bd9Gjn3ZCLl8GYbAN1NRWWcg7E5NS3wfbxFExCJCAEt8X4VkoTQfOL77bWE+TFyPb2F+me+CSlaqgC8D+ElfnSTOn2p8//tY1xHJQnaN7++hJZXk15bG93mF58pQ9zmDdxC+hcYlfE0o4l9lMkq/VTshAK0IVPkBvo83R0R5EQSwgHd/NdhTnL/U8I6Ni/2Xa++v5luTGl6Bb6HZyJ3lgVNRu5nR8qHRz6BQ5Qf4OkP8dt6QCXvPnj178eyFoGehelxcSxj7Pvwm5CQifvfkeG9+b6/V4pYvNYIbjfnjQ+Yyw41eLtvINhqNLPsntdknHqiCSxUlpR9vjiiCaib5fYxUc+EM2/ilJrZBxHznU69ydrizmzteXDzOzZ10Fny9nyeOWDXzq0SDPh9kGedrf24f75bY/qewcg0PCO7iwH45VuiMtmcDu+lY5n304QNa5fu7fm0jnsdK1nfb+rCbamjvnsFXfvWRj9G3uJ6+ju/tNgP930LwHtAI8BGNaEQjGtGIRjSiEY1oRCMa0YhGNKIRfQf9P0OXyUeD9PD2AAAAAElFTkSuQmCC)`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100%',
                backgroundPosition: 'center'
                }}
          >
            <a href="/"

            >
            Secure Payments
            </a>g
          </span>
          <span>
            <a href="/"
              style={{
                backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-HNCYcJQINMnCWnhpDxzOPAUcodK9SclO6A&usqp=CAU)`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
                }}
            >
            Secure Payments
            </a>
          </span>
          <span
              style={{
                backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-HNCYcJQINMnCWnhpDxzOPAUcodK9SclO6A&usqp=CAU)`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
                }}
          >
            <a href="/">
            Follow us links
            </a>
          </span>
          <span>
            <span>
              <a href="/"
                style={{
                  backgroundImage: `url(data:image/png;base64,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)`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover'
                  }}
              >
              Secure Payments
              </a>
            </span>
            <span
                // style={{
                //   backgroundImage: `url(data:image/png;base64,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)`,
                //   backgroundRepeat: 'no-repeat',
                //   backgroundSize: 'cover',
                //   backgroundPosition: 'center'
                //   }}
            >
              <a href="/">
              Follow us links
              </a>
            </span>
          </span>
        </div>
      </div>
    </div>
  )
  }

export default Footer