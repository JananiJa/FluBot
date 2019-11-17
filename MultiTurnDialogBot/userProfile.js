// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

class UserProfile {
    constructor(self, name, age) {
        this.self = self,
        this.name = name;
        this.age = age;
    }
}

module.exports.UserProfile = UserProfile;
