import './App.css'
import SavedSearchIcon from '@mui/icons-material/SavedSearch'
import PersonIcon from '@mui/icons-material/Person'
import GroupIcon from '@mui/icons-material/Group'
import RefreshIcon from '@mui/icons-material/Refresh'
import SettingsIcon from '@mui/icons-material/Settings'
import HelpIcon from '@mui/icons-material/Help'
import styled from '@emotion/styled'

function App() {
	const HeaderIconUl = styled.ul`
		display: flex;
	`

	const HeaderIconListItem = styled.li`
		text-align: center;
		margin-right: 2.5rem;
		cursor: pointer;
	`

	return (
		<div className="w-full h-screen pr-10 pl-10">
			<header className="w-full h-16 p-4 bg-white flex justify-between border-b-2 border-zinc-300">
				<div className="flex">
					<div className="mr-24">
						<img
							src=""
							alt="empty"
						/>
					</div>
					<div>
						<HeaderIconUl className="flex">
							<HeaderIconListItem className="mr-10">
								<PersonIcon />
								<span>個人</span>
							</HeaderIconListItem>
							<HeaderIconListItem>
								<GroupIcon />
								<span>グループ</span>
							</HeaderIconListItem>
						</HeaderIconUl>
					</div>
				</div>
				<div>
					<HeaderIconUl className="flex">
						<HeaderIconListItem className="mr-10">
							<RefreshIcon />
						</HeaderIconListItem>
						<HeaderIconListItem className="mr-10">
							<SettingsIcon />
						</HeaderIconListItem>
						<HeaderIconListItem className="mr-10">
							<HelpIcon />
						</HeaderIconListItem>
					</HeaderIconUl>
				</div>
			</header>
			<div className="w-full h-wh pt-10 flex">
				<nav className="w-64 border-r-2 border-zinc-200">
					<div className="w-full h-44">Mini calendar</div>
					<div className="mt-10 h-ch ">
						<div className="w-full mb-3">
							<ul className="flex justify-center text-center">
								<li className="bg-zinc-100 flex-1 border-r-2 border-zinc-300">
									グループ
								</li>
								<li className="flex-1">メンバー</li>
							</ul>
						</div>
						<div className="w-full mb-3 bg-gray-200 rounded-lg flex">
							<span className="w-10 text-center cursor-pointer">
								<SavedSearchIcon />
							</span>
							<input
								type="text"
								name=""
								id=""
								placeholder="ユーザー名で検索"
								className="bg-gray-200 w-full text-center flex-1"
							/>
						</div>
						<div className="w-full h-3/4">
							<ul className="">
								<li className="p-2">
									<input
										type="checkbox"
										name=""
										id=""
										className="mr-2"
									/>
									<span className="mr-2">
										<PersonIcon />
									</span>
									<span>Name</span>
								</li>
								<li className="p-2">
									<input
										type="checkbox"
										name=""
										id=""
										className="mr-2"
									/>
									<span className="mr-2">
										<PersonIcon />
									</span>
									<span>Name</span>
								</li>
								<li className="p-2">
									<input
										type="checkbox"
										name=""
										id=""
										className="mr-2"
									/>
									<span className="mr-2">
										<PersonIcon />
									</span>
									<span>Name</span>
								</li>
								<li className="p-2">
									<input
										type="checkbox"
										name=""
										id=""
										className="mr-2"
									/>
									<span className="mr-2">
										<PersonIcon />
									</span>
									<span>Name</span>
								</li>
								<li className="p-2">
									<input
										type="checkbox"
										name=""
										id=""
										className="mr-2"
									/>
									<span className="mr-2">
										<PersonIcon />
									</span>
									<span>Name</span>
								</li>
								<li className="p-2">
									<input
										type="checkbox"
										name=""
										id=""
										className="mr-2"
									/>
									<span className="mr-2">
										<PersonIcon />
									</span>
									<span>Name</span>
								</li>
								<li className="p-2">
									<input
										type="checkbox"
										name=""
										id=""
										className="mr-2"
									/>
									<span className="mr-2">
										<PersonIcon />
									</span>
									<span>Name</span>
								</li>
								<li className="p-2">
									<input
										type="checkbox"
										name=""
										id=""
										className="mr-2"
									/>
									<span className="mr-2">
										<PersonIcon />
									</span>
									<span>Name</span>
								</li>
								<li className="p-2">
									<input
										type="checkbox"
										name=""
										id=""
										className="mr-2"
									/>
									<span className="mr-2">
										<PersonIcon />
									</span>
									<span>Name</span>
								</li>
								<li className="p-2">
									<input
										type="checkbox"
										name=""
										id=""
										className="mr-2"
									/>
									<span className="mr-2">
										<PersonIcon />
									</span>
									<span>Name</span>
								</li>
								<li className="p-2">
									<input
										type="checkbox"
										name=""
										id=""
										className="mr-2"
									/>
									<span className="mr-2">
										<PersonIcon />
									</span>
									<span>Name</span>
								</li>
								<li className="p-2">
									<input
										type="checkbox"
										name=""
										id=""
										className="mr-2"
									/>
									<span className="mr-2">
										<PersonIcon />
									</span>
									<span>Name</span>
								</li>
							</ul>
						</div>
					</div>
				</nav>
				<div className="flex-1 bg-gray-50">Calendar</div>
			</div>
		</div>
	)
}

export default App
