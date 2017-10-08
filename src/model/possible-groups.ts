import { range } from 'lodash'
import { GSTeam as Team } from './team'

export function allPossibleGroups(
  pots: Team[][],
  groups: Team[][],
  teamPicked: Team,
  currentPotIndex: number,
) {
  if (groups.every(group => group.length === 0)) {
    return range(groups.length)
  }
  return filterGroupsBasic(groups, teamPicked, currentPotIndex).filter(groupNum => {
    groups[groupNum].push(teamPicked)
    const possible = groupIsPossible(pots, groups, currentPotIndex)
    groups[groupNum].pop()
    return possible
  })
}

export function firstPossibleGroup(
  pots: Team[][],
  groups: Team[][],
  teamPicked: Team,
  currentPotIndex: number,
) {
  if (groups.every(group => group.length === 0)) {
    return 0
  }
  return filterGroupsBasic(groups, teamPicked, currentPotIndex).find(groupNum => {
    groups[groupNum].push(teamPicked)
    const possible = groupIsPossible(pots, groups, currentPotIndex)
    groups[groupNum].pop()
    return possible
  }) as number
}

function groupIsPossible(
  pots: Team[][],
  groups: Team[][],
  currentPotIndex: number,
): boolean {
  if (pots[currentPotIndex].length === 0 && ++currentPotIndex === pots.length) {
    return true
  }
  const currentPot = pots[currentPotIndex]
  const team = currentPot.pop() as Team
  let possible = false
  for (const groupNum of filterGroupsBasic(groups, team, currentPotIndex)) {
    const group = groups[groupNum]
    group.push(team)
    possible = groupIsPossible(pots, groups, currentPotIndex)
    group.pop()
    if (possible) {
      break
    }
  }
  currentPot.push(team)
  return possible
}

function filterGroupsBasic(
  groups: Team[][],
  teamPicked: Team,
  currentPotIndex: number,
): number[] {
  const halfNumGroups = groups.length >> 1
  const bottom = filterSomeGroups(groups, teamPicked, currentPotIndex, 0, halfNumGroups)
  const top = filterSomeGroups(groups, teamPicked, currentPotIndex, halfNumGroups, groups.length)
  return bottom.length === 0 ? top : top.length === 0 ? bottom : bottom.concat(top)
}

const ru = (otherTeam: Team) => otherTeam.country === 'ua'
const ua = (otherTeam: Team) => otherTeam.country === 'ru'
const def = (otherTeam: Team) => false

const extraConstraints = (teamPicked: Team) =>
  teamPicked.country === 'ru' ? ru : teamPicked.country === 'ua' ? ua : def

function filterSomeGroups(
  groups: Team[][],
  teamPicked: Team,
  currentPotIndex: number,
  start: number,
  end: number,
): number[] {
  const possibles: number[] = []
  const extraCondition = extraConstraints(teamPicked)

  for (let i = start; i < end; ++i) {
    const group = groups[i]
    let canDraw = true
    for (const team of group) {
      if (team.country === teamPicked.country || extraCondition(team)) {
        canDraw = false
        if (team.pairing === teamPicked) {
          return []
        }
        break
      }
    }
    if (canDraw && group.length <= currentPotIndex) {
      possibles.push(i)
    }
  }
  return possibles
}
