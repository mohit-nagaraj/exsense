import User from "../model/user.model.js";
import bcrypt from "bcryptjs";
// if js extension is not there it will crash
import { users } from '../dummyData/data.js';

const userResolver = {
	Query: {
		users: () => users,
        // 4 things we get inorder: parent, args, context, info
        // parent no need now so _
        //  args we destructured and get userId
        user: async (_, { userId }) => {
			try {
				const user = await User.findById(userId);
				return user;
			} catch (err) {
				console.error("Error in user query:", err);
				throw new Error(err.message || "Error getting user");
			}
		},
		authUser: async (_, __, context) => {
			try {
				const user = await context.getUser();
				return user;
			} catch (err) {
				console.error("Error in authUser: ", err);
				throw new Error("Internal server error");
			}
		},
	},
	Mutation: {
        signUp: async (_, { input }, context) => {
			try {
				const { username, name, password, gender } = input;
                // if any of the fields are empty
				if (!username || !name || !password || !gender) {
					throw new Error("All fields are required");
				}
                //if username is already taken
				const existingUser = await User.findOne({ username });
				if (existingUser) {
					throw new Error("User already exists");
				}

                //salting is encoding the password, 10 times encoded
				const salt = await bcrypt.genSalt(10);
                //hashing the password
				const hashedPassword = await bcrypt.hash(password, salt);

				// https://avatar-placeholder.iran.liara.run/ username makes it unique in api
				const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
				const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

				const newUser = new User({
					username,
					name,
					password: hashedPassword,
					gender,
					profilePicture: gender === "male" ? boyProfilePic : girlProfilePic,
				});
				//save the user in db
				await newUser.save();
				//login the user
				await context.login(newUser);
				//return the user
				return newUser;
			} catch (err) {
				console.error("Error in signUp: ", err);
				throw new Error(err.message || "Internal server error");
			}
		},
		login: async (_, { input }, context) => {
			try {
				const { username, password } = input;
				if (!username || !password) throw new Error("All fields are required");
				//authenticate the user with username and password
				const { user } = await context.authenticate("graphql-local", { username, password });
				//login the user
				await context.login(user);
				return user;
			} catch (err) {
				console.error("Error in login:", err);
				throw new Error(err.message || "Internal server error");
			}
		},
		logout: async (_, __, context) => {
			try {
				//logout the user
				await context.logout();
				//destroy the session
				context.req.session.destroy((err) => {
					if (err) throw err;
				});
				//clear the cookie
				context.res.clearCookie("connect.sid");

				return { message: "Logged out successfully" };
			} catch (err) {
				console.error("Error in logout:", err);
				throw new Error(err.message || "Internal server error");
			}
		},
    },
};

export default userResolver;

