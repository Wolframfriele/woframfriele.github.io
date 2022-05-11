import _ from 'lodash'
import all from '../data/projects/*.json'

export const projects = _.chain(all)
                         .orderBy('date', 'desc')
                         .value()

export function findPost(permalink) {
    return _.find(projects, {permalink})
}