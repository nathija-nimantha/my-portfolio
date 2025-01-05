interface SkillBarProps {
    name: string
    level: number
  }
  
  const SkillBar: React.FC<SkillBarProps> = ({ name, level }) => {
    return (
      <div className="mb-4">
        <div className="flex justify-between mb-1">
          <span className="text-base font-medium text-gray-700 dark:text-gray-300">{name}</span>
          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{level}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div
            className="bg-indigo-600 h-2.5 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${level}%` }}
          ></div>
        </div>
      </div>
    )
  }
  
  export default SkillBar
  