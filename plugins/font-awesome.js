import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'
import { faCodepen } from '@fortawesome/free-brands-svg-icons/faCodepen'
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons/faStackOverflow'

library.add(faGithub, faLinkedin, faCodepen, faStackOverflow)

config.autoAddCss = false

Vue.component('FontAwesome', FontAwesomeIcon)
