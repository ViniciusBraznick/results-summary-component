import ReactionIcon from '../../assets/images/icon-reaction.svg'
import MemoryIcon from '../../assets/images/icon-memory.svg'
import VerbalIcon from '../../assets/images/icon-verbal.svg'
import VisualIcon from '../../assets/images/icon-visual.svg'


export const SummaryData = [
  {
    name: "Reaction",
    image: ReactionIcon,
    score: 80,
    color: {
      main: '#F55',
      background: 'rgba(255, 85, 85, 0.12)'
    }
  },
  {
    name: "Memory",
    image: MemoryIcon,
    score: 92,
    color: {
      main: '#FFB21E',
      background: 'rgba(255, 178, 30, 0.12)'
    }
  },
  {
    name: "Verbal",
    image: VerbalIcon,
    score: 61,
    color: {
      main: '#00BB8F',
      background: 'rgba(0, 187, 143, 0.12)'
    }
  },
  {
    name: "Visual",
    image: VisualIcon,
    score: 72,
    color: {
      main: '#1125D6',
      background: 'rgba(17, 37, 214, 0.12)'
    }
  }
]
