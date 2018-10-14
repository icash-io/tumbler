const RingMixerV2 = artifacts.require("./RingMixerV2.sol");

module.exports = function(deployer, network, accounts) {
  const owner = accounts[0];
  deployer.deploy(RingMixerV2).then(async () => {
    const ringMixer = await RingMixerV2.deployed();
    console.log('ringMixer:',ringMixer);
  });
};
